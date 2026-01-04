// src/components/Chat/ChatInterface.tsx
import { useEffect, useRef } from "react";
import { useChat } from "../../hooks/useChat";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";

const ChatInterface = ({ character }: { character: string }) => {
  const {
    messages,
    input,
    isSending,
    updateDraft,
    sendMessage,
  } = useChat(character);

  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full p-4 bg-cyberpunk-bg text-white">
      <ChatMessages messages={messages} endRef={endRef} />
      <ChatInput
        value={input}
        onChange={updateDraft}
        onSend={sendMessage}
        disabled={isSending}
      />
    </div>
  );
};

export default ChatInterface;