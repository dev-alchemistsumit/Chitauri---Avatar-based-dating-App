// src/features/avatarRoom/useAvatarRouting.ts
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DEFAULT_AVATAR, VALID_AVATARS } from "./avatarConfig";

export const useAvatarRouting = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathSegment = location.pathname.split("/").pop()?.toLowerCase();

  // Redirect /avatar-room → last avatar
  useEffect(() => {
    if (location.pathname === "/avatar-room") {
      const lastAvatar =
        localStorage.getItem("lastAvatar") || DEFAULT_AVATAR;

      navigate(`/chat/${lastAvatar}`, { replace: true });
    }
  }, [location.pathname, navigate]);

  // Invalid avatar → 404
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

  const isValidAvatar =
    !!pathSegment && VALID_AVATARS.includes(pathSegment);

  return {
    avatarKey: isValidAvatar ? pathSegment : null,
  };
};
