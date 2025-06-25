// src/pages/UserProfile.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const UserProfile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      name,
      age,
      bio,
    });

    alert("Profile updated!");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setPhoto(file);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-cyberpunk-accent">
          Edit Your Profile
        </h2>
        <form onSubmit={handleUpdate} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border rounded-md"
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="p-3 border rounded-md"
          />
          <textarea
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="p-3 border rounded-md"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="p-3"
          />
          <button className="bg-cyberpunk-accent text-black font-bold py-3 rounded hover:bg-opacity-80 transition">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
