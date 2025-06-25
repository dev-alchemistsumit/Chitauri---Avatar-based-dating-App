// src/pages/UserProfile.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>("");

  useEffect(() => {
    const fetchUser = async () => {
      if (!user) return;
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const data = userSnap.data();
        setName(data.name || "");
        setAge(data.age || "");
        setBio(data.bio || "");
        if (data.photoURL) setPhotoPreview(data.photoURL);
      }
    };
    fetchUser();
  }, [user]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const userRef = doc(db, "users", user.uid);
    const updates: any = {
      name,
      age,
      bio,
    };

    if (photo) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        updates.photoURL = reader.result;
        await updateDoc(userRef, updates);
        setPhotoPreview(reader.result as string);
        alert("Profile updated!");
      };
      reader.readAsDataURL(photo);
    } else {
      await updateDoc(userRef, updates);
      alert("Profile updated!");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setPhoto(file);
    if (file) setPhotoPreview(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-white to-blue-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-cyberpunk-accent">
          Edit Your Profile
        </h2>
        {photoPreview && (
          <div className="flex justify-center mb-4">
            <img
              src={photoPreview}
              alt="Profile Preview"
              className="w-24 h-24 rounded-full object-cover border-4 border-cyberpunk-accent"
            />
          </div>
        )}
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
        <div className="mt-6 text-center">
          <Link
            to="/avatar-room"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Go to Avatar Room →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
