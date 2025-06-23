// src/components/AvatarRoom.tsx
import React from "react";
import { useLocation } from "react-router-dom";

import GirlInYellow from "./AvatarModels/girl_in_yellow";
import RussianGirl from "./AvatarModels/Russian_Girl_AvatarModel";
import ChatInterface from "./ChatInterface";

// Mapping avatar keys to components
const avatarMap: Record<string, React.FC> = {
  yellow: GirlInYellow,
  russian: RussianGirl,
};

const AvatarRoom = () => {
  const location = useLocation();
  const selectedAvatarKey = location.state?.selectedAvatar ?? "russian"; // fallback default

  const SelectedAvatarModel = avatarMap[selectedAvatarKey] || RussianGirl;

  return (
    <div className="bg-cyberpunk-bg text-white h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left: Avatar */}
      <section className="w-full md:w-1/2 p-4 bg-gradient-to-br from-cyberpunk-neonPurple to-cyberpunk-neonBlue flex flex-col rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">3D Avatar Preview</h2>
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-white">Online</span>
          </div>
        </div>
        <div className="flex-grow overflow-hidden">
          <SelectedAvatarModel />
        </div>
      </section>

      {/* Right: Chat */}
      <section className="w-full md:w-1/2 p-4 bg-cyberpunk-bg flex flex-col rounded-lg shadow-md border border-cyberpunk-accent overflow-hidden">
        <h2 className="text-xl font-semibold mb-4">Chat with Avatar</h2>
        <div className="flex-grow overflow-y-auto ">
          <ChatInterface />
        </div>
      </section>
    </div>
  );
};

export default AvatarRoom;
