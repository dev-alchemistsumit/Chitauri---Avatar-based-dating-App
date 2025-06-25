import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, db } from "../../firebase";
import {
  doc,
  getDoc,
  updateDoc,
  setDoc,
  enableNetwork,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { Pencil } from "lucide-react"; // edit icon

const UserProfile = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      try {
        await enableNetwork(db);
      } catch (err) {
        console.warn("Firestore network may already be enabled:", err);
      }

      if (loading || !user) return;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const data = userSnap.data();
        setName(data.name || "");
        setAge(data.age || "");
        setGender(data.gender || "");
        setBio(data.bio || "");
        if (data.photoURL) setPhotoPreview(data.photoURL);
      } else {
        await setDoc(userRef, {
          name: "",
          age: "",
          bio: "",
          gender: "",
          photoURL: "",
        });
      }
    };

    initialize();
  }, [user, loading]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const userRef = doc(db, "users", user.uid);
    const updates: any = { name, age, bio, gender };

    if (photo) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        updates.photoURL = reader.result;
        await updateDoc(userRef, updates);
        setPhotoPreview(reader.result as string);
        alert("Profile updated!");
        setIsEditing(false);
      };
      reader.readAsDataURL(photo);
    } else {
      await updateDoc(userRef, updates);
      alert("Profile updated!");
      setIsEditing(false);
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
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-cyberpunk-accent">Your Profile</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-cyberpunk-accent hover:text-black"
          >
            <Pencil className="w-5 h-5" />
          </button>
        </div>

        {photoPreview && (
          <div className="flex justify-center mb-4">
            <img
              src={photoPreview}
              alt="Profile Preview"
              className="w-24 h-24 rounded-full object-cover border-4 border-cyberpunk-accent"
            />
          </div>
        )}

        {!isEditing ? (
          <div className="mb-6 border p-4 rounded-lg shadow-sm bg-gray-50 text-sm">
            <p><strong>Name:</strong> {name || "Not set"}</p>
            <p><strong>Age:</strong> {age || "Not set"}</p>
            <p><strong>Gender:</strong> {gender || "Not set"}</p>
            <p><strong>Bio:</strong> {bio || "Not set"}</p>
          </div>
        ) : (
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
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="p-3 border rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="p-3"
            />
            <button className="bg-cyberpunk-accent text-black font-bold py-3 rounded hover:bg-opacity-80 transition">
              Save Changes
            </button>
          </form>
        )}        
      </div>
    </div>
  );
};

export default UserProfile;
