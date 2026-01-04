// src/hooks/useChat.ts
import { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Message } from "../types/chat";
import {
  getChatRef,
  ensureChatDoc,
  listenToChat,
  saveDraft,
  saveMessages,
} from "../services/chatService";

export const useChat = (character: string) => {
  const [user, loading] = useAuthState(auth);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const draftTimeout = useRef<NodeJS.Timeout | null>(null);

  const characterName =
    character.charAt(0).toUpperCase() + character.slice(1);

  // realtime sync
  useEffect(() => {
    if (loading || !user) return;

    const ref = getChatRef(user.uid, character);

    // ensureChatDoc(ref);

    const unsub = listenToChat(ref, (data) => {
      setMessages(data.conversations || []);
      setInput(data.draft || "");
    });

    return () => unsub();
  }, [user, loading, character]);

  // draft debounce
  const updateDraft = (value: string) => {
    setInput(value);
    if (!user) return;

    if (draftTimeout.current) clearTimeout(draftTimeout.current);

    draftTimeout.current = setTimeout(() => {
      const ref = getChatRef(user.uid, character);
      saveDraft(ref, value);
    }, 400);
  };

  // send message
  const sendMessage = async () => {
    if (!input.trim() || !user || isSending) return;

    setIsSending(true);

    const ref = getChatRef(user.uid, character);

    const userMessage: Message = { sender: "You", text: input };
    const updated = [...messages, userMessage];

    setMessages(updated);
    setInput("");

    await saveMessages(ref, updated, true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.text,
          character,
          history: updated.map((m) => ({
            role: m.sender === "You" ? "user" : "assistant",
            content: m.text,
          })),
        }),
      });

      const data = await res.json();

      const aiMessage: Message = {
        sender: characterName,
        text: data.reply,
      };

      await saveMessages(ref, [...updated, aiMessage]);
    } finally {
      setIsSending(false);
    }
  };

  return {
    messages,
    input,
    isSending,
    updateDraft,
    sendMessage,
  };
};
