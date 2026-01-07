// src/components/Chat/ChatMessages.tsx
import { Message } from "../../types/chat";

export const ChatMessages = ({
  messages,
  endRef,
}: {
  messages: Message[];
  endRef: React.RefObject<HTMLDivElement>;
}) => (
  <div className="flex-1 overflow-y-auto p-3 bg-black/30 rounded space-y-2">
    {messages.map((msg, i) => (
      <div
        key={i}
        className={`p-2 rounded text-sm max-w-[80%] ${
          msg.sender === "You" ? "bg-blue-600 ml-auto" : "bg-purple-600 mr-auto"
        }`}
      >
        <strong>{msg.sender}:</strong> {msg.text}
      </div>
    ))}
    <div ref={endRef} />
  </div>
);
