// src/components/ChatInterface.tsx
import React from 'react';

const ChatInterface = () => {
  const mockMessages = [
    { sender: 'AI', text: 'Hi! How are you today?' },
    { sender: 'You', text: 'Doing great! Working on our project.' },
    { sender: 'AI', text: 'Awesome! Let me know how I can help.' },
  ];

  return (
    <div className="space-y-2">
      {mockMessages.map((msg, idx) => (
        <div key={idx} className={`p-2 rounded-md ${msg.sender === 'AI' ? 'bg-blue-100' : 'bg-green-100'}`}>
          <strong>{msg.sender}:</strong> {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatInterface;