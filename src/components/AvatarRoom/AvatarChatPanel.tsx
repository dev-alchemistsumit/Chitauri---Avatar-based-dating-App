// src/features/avatarRoom/AvatarChatPanel.tsx
import React from "react";
import ChatInterface from "../Chat/ChatInterface";

interface Props {
  avatarKey: string;
}

const AvatarChatPanel: React.FC<Props> = ({ avatarKey }) => {
  return (
    <section className="w-full md:w-1/2 p-4 bg-cyberpunk-bg flex flex-col rounded-lg shadow-md border border-cyberpunk-accent overflow-hidden">
      <h2 className="text-xl font-semibold mb-4">Chat with Avatar</h2>

      <div className="flex-grow overflow-y-auto">
        <ChatInterface character={avatarKey} />
      </div>
    </section>
  );
};

export default AvatarChatPanel;
