// src/components/Chat/ChatInput.tsx
export const ChatInput = ({
  value,
  onChange,
  onSend,
  disabled,
}: any) => (
  <div className="mt-3 flex gap-2">
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && onSend()}
      className="flex-1 p-2 rounded bg-black/40 border border-cyberpunk-accent text-white"
      placeholder="Type a message..."
    />
    <button
      onClick={onSend}
      disabled={disabled}
      className="px-4 py-2 bg-cyberpunk-accent text-black font-bold rounded disabled:opacity-50"
    >
      Send
    </button>
  </div>
);
