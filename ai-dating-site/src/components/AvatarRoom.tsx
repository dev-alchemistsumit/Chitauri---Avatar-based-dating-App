
// src/components/AvatarRoom.tsx
import React from 'react';
import ChatInterface from './ChatInterface';

const AvatarRoom = () => {
  return (
    <div className="p-8 space-y-10">
      <section className="bg-white rounded shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">3D Avatar Preview</h2>
        <p>Placeholder for interactive 3D avatar rendering (WebGL/Three.js).</p>
        <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
          [3D Avatar Placeholder]
        </div>
      </section>
      <section className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Chat with Avatar</h2>
        <ChatInterface />
      </section>
    </div>
  );
};

export default AvatarRoom;
