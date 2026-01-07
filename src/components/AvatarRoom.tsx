// src/pages/AvatarRoom.tsx
import React from "react";
import { avatarMap } from "../components/AvatarRoom/avatarConfig";
import { useAvatarRouting } from "../components/AvatarRoom/useAvatarRouting";
import AvatarPreviewPanel from "../components/AvatarRoom/AvatarPreviewPanel";
import AvatarChatPanel from "../components/AvatarRoom/AvatarChatPanel";

const AvatarRoom: React.FC = () => {
  const { avatarKey } = useAvatarRouting();

  if (!avatarKey) return null; // prevents flicker before redirect

  const SelectedAvatarModel = avatarMap[avatarKey];

  return (
    <div className="bg-cyberpunk-bg text-white h-screen flex flex-col md:flex-row overflow-hidden">
      <AvatarPreviewPanel AvatarModel={SelectedAvatarModel} />
      <AvatarChatPanel avatarKey={avatarKey} />
    </div>
  );
};

export default AvatarRoom;