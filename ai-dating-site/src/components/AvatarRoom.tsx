// src/components/AvatarRoom.tsx
import React from "react";
import ChatInterface from "./ChatInterface";
import AvatarModel from "./AvatarModel/AvatarModel";

const AvatarRoom = () => {
  return (
    <div className="bg-cyberpunk-bg text-white h-screen flex flex-col md:flex-row overflow-hidden">
      <section className="w-full md:w-1/2 p-4 bg-gradient-to-br from-cyberpunk-neonPurple to-cyberpunk-neonBlue flex flex-col rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">3D Avatar Preview</h2>
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-white">Online</span>
          </div>
        </div>
        <div className="flex-grow overflow-hidden">
          <AvatarModel />
        </div>
      </section>

      <section className="w-full md:w-1/2 p-4 bg-cyberpunk-bg flex flex-col rounded-lg shadow-md border border-cyberpunk-accent overflow-hidden">
        <h2 className="text-xl font-semibold mb-4">Chat with Avatar</h2>
        <div className="flex-grow overflow-y-auto">
          <ChatInterface />
        </div>
      </section>
    </div>
  );
};

export default AvatarRoom;
