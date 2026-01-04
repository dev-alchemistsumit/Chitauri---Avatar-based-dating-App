import { useEffect, useState, useRef } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { Pencil } from "lucide-react";

const UserProfile = () => {
  const [user, loading] = useAuthState(auth);
  const mountedRef = useRef(true);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    mountedRef.current = true;

    const loadProfile = async () => {
      if (loading || !user) return;

      try {
        const userRef = doc(db, "users", user.uid);
        const snap = await getDoc(userRef);

        if (!mountedRef.current) return;

        if (snap.exists()) {
          const data = snap.data();
          setName(data.name || "");
          setAge(data.age || "");
          setGender(data.gender || "");
          setBio(data.bio || "");
          setPhotoPreview(data.photoURL || "");
        } else {
          await setDoc(userRef, {
            name: "",
            age: "",
            gender: "",
            bio: "",
            photoURL: "",
          });
        }
      } catch (err) {
        console.error("Failed to load profile:", err);
      }
    };

    loadProfile();

    return () => {
      mountedRef.current = false;
    };
  }, [user, loading]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const userRef = doc(db, "users", user.uid);
    const updates: any = { name, age, bio, gender };

    try {
      if (photo) {
        const reader = new FileReader();
        reader.onloadend = async () => {
          updates.photoURL = reader.result;
          await updateDoc(userRef, updates);
          setPhotoPreview(reader.result as string);
          setIsEditing(false);
        };
        reader.readAsDataURL(photo);
      } else {
        await updateDoc(userRef, updates);
        setIsEditing(false);
      }
    } catch (err) {
      console.error("Profile update failed:", err);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setPhoto(file);
    if (file) setPhotoPreview(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-blue-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-cyberpunk-accent">
            Your Profile
          </h2>
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
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-cyberpunk-accent"
            />
          </div>
        )}

        {!isEditing ? (
          <div className="border p-4 rounded bg-gray-50 text-sm">
            <p><strong>Name:</strong> {name || "Not set"}</p>
            <p><strong>Age:</strong> {age || "Not set"}</p>
            <p><strong>Gender:</strong> {gender || "Not set"}</p>
            <p><strong>Bio:</strong> {bio || "Not set"}</p>
          </div>
        ) : (
          <form onSubmit={handleUpdate} className="flex flex-col space-y-4">
            <input value={name} onChange={e => setName(e.target.value)} className="p-3 border rounded" />
            <input value={age} onChange={e => setAge(e.target.value)} className="p-3 border rounded" />
            <textarea value={bio} onChange={e => setBio(e.target.value)} className="p-3 border rounded" />
            <select value={gender} onChange={e => setGender(e.target.value)} className="p-3 border rounded">
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button className="bg-cyberpunk-accent py-3 rounded font-bold">
              Save Changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserProfile;