// src/pages/AvatarRoom.tsx

import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Avatar_Ava from "../components/AvatarModels/Avatar_Ava";
import Avatar_Christina from "../components/AvatarModels/Avatar_Christina";
import Avatar_Ichika from "./AvatarModels/Avatar_Ichika";
import Avatar_Mita from "../components/AvatarModels/Avatar_Mita";
import ChatInterface from "./ChatInterface";

//Registered Avatars
const avatarMap: Record<string, React.FC> = {
  ava: Avatar_Ava,
  christina: Avatar_Christina,
  ichika: Avatar_Ichika,
  mita: Avatar_Mita,
};

const VALID_AVATARS = Object.keys(avatarMap);
const DEFAULT_AVATAR = "christina";
  
// AvatarRoom Component
const AvatarRoom: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathSegment = location.pathname.split("/").pop()?.toLowerCase();

  // Auto redirect to last avatar
  useEffect(() => {
    if (location.pathname === "/avatar-room") {
      const lastAvatar = localStorage.getItem("lastAvatar") || DEFAULT_AVATAR;

      navigate(`/chat/${lastAvatar}`, { replace: true });
    }
  }, [location.pathname, navigate]);

  // INVALID AVATAR → 404
  useEffect(() => {
    if (
      location.pathname.startsWith("/chat/") &&
      (!pathSegment || !VALID_AVATARS.includes(pathSegment))
    ) {
      navigate("/404", { replace: true });
    }
  }, [location.pathname, pathSegment, navigate]);

  // Persist last valid avatar
  useEffect(() => {
    if (pathSegment && VALID_AVATARS.includes(pathSegment)) {
      localStorage.setItem("lastAvatar", pathSegment);
    }
  }, [pathSegment]);

  // Resolve Avatar Component
  if (!pathSegment || !VALID_AVATARS.includes(pathSegment)) {
    return null; // prevents flicker before redirect
  }

  const SelectedAvatarModel = avatarMap[pathSegment];

  return (
    <div className="bg-cyberpunk-bg text-white h-screen flex flex-col md:flex-row overflow-hidden">
      <section className="w-full md:w-1/2 p-4 bg-gradient-to-br from-cyberpunk-neonPurple to-cyberpunk-neonBlue flex flex-col rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">3D Avatar Preview</h2>
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium">Online</span>
          </div>
        </div>
        <div className="flex-grow overflow-hidden">
          <SelectedAvatarModel />
        </div>
      </section>
      <section className="w-full md:w-1/2 p-4 bg-cyberpunk-bg flex flex-col rounded-lg shadow-md border border-cyberpunk-accent overflow-hidden">
        <h2 className="text-xl font-semibold mb-4">Chat with Avatar</h2>
        <div className="flex-grow overflow-y-auto">
          <ChatInterface character={pathSegment} />
        </div>
      </section>
    </div>
  );
};

export default AvatarRoom;
