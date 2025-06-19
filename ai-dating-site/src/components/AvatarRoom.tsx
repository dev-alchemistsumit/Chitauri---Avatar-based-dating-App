// src/components/AvatarRoom.tsx
import React from 'react';
import ChatInterface from './ChatInterface';
import AvatarModel from './AvatarModel/AvatarModel';

const AvatarRoom = () => {
  return (
    <div className="bg-cyberpunk-bg min-h-screen text-white flex flex-col md:flex-row gap-4 p-4">
      <section className="w-full md:w-1/2 p-4 rounded shadow bg-gradient-to-br from-cyberpunk-neonPurple to-cyberpunk-neonBlue">
        <h2 className="text-2xl font-semibold mb-4">3D Avatar Preview</h2>
        <AvatarModel />
      </section>
      <section className="w-full md:w-1/2 p-4 bg-cyberpunk-bg rounded shadow border border-cyberpunk-accent flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Chat with Avatar</h2>
        <ChatInterface />
      </section>
    </div>
  );
};

export default AvatarRoom;