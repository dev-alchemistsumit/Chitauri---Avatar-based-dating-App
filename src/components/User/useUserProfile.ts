import { useEffect, useRef, useState } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export const useUserProfile = () => {
  const [user, loading] = useAuthState(auth);
  const mountedRef = useRef(true);

  const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
    bio: "",
    subscription: "Free",
    photoURL: "",
  });

  useEffect(() => {
    if (!user || loading) return;

    const load = async () => {
      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (!mountedRef.current) return;

      if (snap.exists()) {
        setProfile(snap.data() as any);
      } else {
        await setDoc(ref, profile);
      }
    };

    load();
    return () => {
      mountedRef.current = false;
    };
  }, [user, loading]);

  const updateProfile = async (updates: Partial<typeof profile>) => {
    if (!user) return;
    const ref = doc(db, "users", user.uid);
    await updateDoc(ref, updates);
    setProfile((p) => ({ ...p, ...updates }));
  };

  return { profile, updateProfile };
};