// src/services/chatService.ts
import { db } from "../firebase";
import {
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
  DocumentData,
  DocumentReference,
} from "firebase/firestore";
import { Message } from "../types/chat";

export const getChatRef = (uid: string, character: string) =>
  doc(db, "users", uid, "avatars", character);

export const ensureChatDoc = async (ref: any) => {
  await setDoc(ref, { conversations: [], draft: "" }, { merge: true });
};
export const listenToChat = (
  ref: DocumentReference<DocumentData>,
  callback: (data: DocumentData) => void
) => {
  return onSnapshot(ref, async (snap) => {
    if (!snap.exists()) {
      await setDoc(ref, { conversations: [], draft: "" });
      callback({ conversations: [], draft: "" });
      return;
    }

    callback(snap.data());
  });
};

export const saveDraft = async (ref: any, draft: string) => {
  await updateDoc(ref, { draft });
};
export const saveMessages = async (
  ref: any,
  conversations: Message[],
  clearDraft = false
) => {
  await updateDoc(ref, {
    conversations,
    ...(clearDraft ? { draft: "" } : {}),
  });
};
