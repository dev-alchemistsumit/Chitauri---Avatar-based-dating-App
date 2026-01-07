// src/features/avatarRoom/AvatarPreviewPanel.tsx
import React from "react";

interface Props {
  AvatarModel: React.FC;
}

const AvatarPreviewPanel: React.FC<Props> = ({ AvatarModel }) => {
  return (
    <section className="w-full md:w-1/2 p-4 bg-gradient-to-br from-cyberpunk-neonPurple to-cyberpunk-neonBlue flex flex-col rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">3D Avatar Preview</h2>
        <div className="flex items-center space-x-2">
          <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-medium">Online</span>
        </div>
      </div>

      <div className="flex-grow overflow-hidden">
        <AvatarModel />
      </div>
    </section>
  );
};

export default AvatarPreviewPanel;
