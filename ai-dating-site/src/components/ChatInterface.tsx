import React, { useState, useEffect, useRef } from 'react';

const LOCAL_KEY = 'chat_history';

const ChatInterface = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const history = localStorage.getItem(LOCAL_KEY);
    if (history) setMessages(JSON.parse(history));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const updated = [...messages, { sender: 'You', text: input }];
    setMessages(updated);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'AI', text: `Echo: ${input}` }]);
    }, 500);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full max-h-screen overflow-hidden">
      {/* Message list */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden bg-black/30 p-3 rounded space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded text-sm sm:text-base break-words ${
              msg.sender === 'You' ? 'bg-blue-600 self-end' : 'bg-purple-600 self-start'
            }`}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="mt-3 flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 p-2 rounded bg-black/40 border border-cyberpunk-accent text-white outline-none"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-cyberpunk-accent text-black font-bold rounded hover:bg-opacity-90"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
