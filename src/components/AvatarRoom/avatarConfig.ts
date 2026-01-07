// src/features/avatarRoom/avatarConfig.ts
import { FC } from "react";
import Avatar_Ava from "../../components/AvatarModels/Avatar_Ava";
import Avatar_Christina from "../../components/AvatarModels/Avatar_Christina";
import Avatar_Ichika from "../../components/AvatarModels/Avatar_Ichika";
import Avatar_Mita from "../../components/AvatarModels/Avatar_Mita";

export const avatarMap: Record<string, FC> = {
  ava: Avatar_Ava,
  christina: Avatar_Christina,
  ichika: Avatar_Ichika,
  mita: Avatar_Mita,
};

export const VALID_AVATARS = Object.keys(avatarMap);
export const DEFAULT_AVATAR = "christina";
