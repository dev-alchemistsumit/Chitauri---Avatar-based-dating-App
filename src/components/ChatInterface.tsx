import { useEffect, useRef, useState } from "react";
import { auth, db } from "../../src/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";

type Message = {
  sender: string;
  text: string;
};

const ChatInterface = ({ character }: { character: string }) => {
  const [user, loading] = useAuthState(auth);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const draftSaveTimeout = useRef<NodeJS.Timeout | null>(null);

  const characterName =
    character.charAt(0).toUpperCase() + character.slice(1);

  /* ------------------------------
     Firestore document reference
  ------------------------------ */
  const getDocRef = () => {
    if (!user) return null;
    return doc(db, "users", user.uid, "avatars", character);
  };

  /* ------------------------------
     REAL-TIME SYNC (messages + draft)
     This is Telegram-class behavior
  ------------------------------ */
  useEffect(() => {
    if (loading || !user) return;

    const ref = getDocRef();
    if (!ref) return;

    const unsubscribe = onSnapshot(ref, async (snap) => {
      if (!snap.exists()) {
        await setDoc(ref, {
          conversations: [],
          draft: "",
        });
        return;
      }

      const data = snap.data();

      setMessages(data.conversations || []);
      setInput(data.draft || "");
    });

    return () => unsubscribe();
  }, [user, loading, character]);

  /* ------------------------------
     AUTO SCROLL
  ------------------------------ */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ------------------------------
     DRAFT SYNC (debounced)
     Fires after user pauses typing
  ------------------------------ */
  const handleDraftChange = (value: string) => {
    setInput(value);

    if (!user) return;
    const ref = getDocRef();
    if (!ref) return;

    if (draftSaveTimeout.current) {
      clearTimeout(draftSaveTimeout.current);
    }

    draftSaveTimeout.current = setTimeout(async () => {
      await updateDoc(ref, {
        draft: value,
      });
    }, 400); // Telegram-like debounce
  };

  /* ------------------------------
     SEND MESSAGE
  ------------------------------ */
  const sendMessage = async () => {
    if (!input.trim() || !user || isSending) return;

    setIsSending(true);

    const ref = getDocRef();
    if (!ref) return;

    const userMessage: Message = {
      sender: "You",
      text: input,
    };

    const updatedMessages = [...messages, userMessage];

    // optimistic UI
    setMessages(updatedMessages);
    setInput("");

    // clear draft instantly
    await updateDoc(ref, {
      conversations: updatedMessages,
      draft: "",
    });

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.text,
          character,
          history: updatedMessages.map((m) => ({
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

      await updateDoc(ref, {
        conversations: [...updatedMessages, aiMessage],
      });
    } catch (err) {
      console.error("Chat error:", err);
    } finally {
      setIsSending(false);
    }
  };

  /* ------------------------------
     UI
  ------------------------------ */
  return (
    <div className="flex flex-col h-full max-h-screen overflow-hidden">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 bg-black/30 rounded space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded text-sm break-words max-w-[80%] ${
              msg.sender === "You"
                ? "bg-blue-600 self-end ml-auto text-white"
                : "bg-purple-600 self-start mr-auto text-white"
            }`}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="mt-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => handleDraftChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 p-2 rounded bg-black/40 border border-cyberpunk-accent text-white outline-none"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          disabled={isSending}
          className="px-4 py-2 bg-cyberpunk-accent text-black font-bold rounded disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
