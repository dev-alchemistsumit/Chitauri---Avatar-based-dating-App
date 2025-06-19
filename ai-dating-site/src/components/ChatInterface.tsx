// src/components/ChatInterface.tsx
import React, { useState, useEffect } from 'react';

const LOCAL_KEY = 'chat_history';

const ChatInterface = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const history = localStorage.getItem(LOCAL_KEY);
    if (history) setMessages(JSON.parse(history));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(messages));
  }, [messages]);

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
    <div className="flex flex-col h-full">
      <div className="flex-1 max-h-[400px] overflow-y-auto bg-black/30 p-4 rounded space-y-2 mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`p-2 rounded ${msg.sender === 'You' ? 'bg-blue-600' : 'bg-purple-600'}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 p-2 rounded bg-black/40 border border-cyberpunk-accent text-white"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-cyberpunk-accent text-black font-bold rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
