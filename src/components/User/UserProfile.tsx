import { useEffect, useState, useRef } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { Pen, Pencil, X } from "lucide-react";


const UserProfile = () => {
  const [user, loading] = useAuthState(auth);
  const mountedRef = useRef(true);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [subscription, setSubscription] = useState("");
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
          setSubscription(data.subscription || "Free");
          setGender(data.gender || "");
          setBio(data.bio || "");
          setPhotoPreview(data.photoURL || "");
        } else {
          await setDoc(userRef, {
            name: "",
            age: "",
            subscription: "",
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
    const updates: any = { name, age, subscription, bio, gender };

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
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg border shadow-black/20">
        <div className="justify-end flex">
          <button
            onClick={() => setIsEditing((isEditing) => !isEditing)}
            className="text-cyberpunk-accent hover:text-black"
          >
            {isEditing ? (
              <X size={35} absoluteStrokeWidth />
            ) : (
              <Pencil size={27} absoluteStrokeWidth   />
            )}
          </button>
        </div>

        <div className="flex justify-center items-center mb-6">
          {photoPreview && (
            <div className="flex justify-center mb-4">
              <img
                src={photoPreview}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-cyberpunk-accent"
              />
            </div>
          )}
        </div>

        {!isEditing ? (
          <div className="border p-4 rounded bg-gray-50 text-sm">
            <p>
              <strong>Name:</strong> {name || "Not set"}
            </p>
            <p>
              <strong>Age:</strong> {age || "Not set"}
            </p>
            <p>
              <strong>My Subscription :</strong> {subscription}
            </p>
            <p>
              <strong>Gender:</strong> {gender || "Not set"}
            </p>
            <p>
              <strong>Bio:</strong> {bio || "Not set"}
            </p>
          </div>
        ) : (
          <form onSubmit={handleUpdate} className="flex flex-col space-y-4">
            <input
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className="p-3 border rounded"
            />
            <input
              value={age}
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
              className="p-3 border rounded"
            />

            <select
              value={subscription}
              onChange={(e) => setSubscription(e.target.value)}
              className="p-3 border rounded"
            >
              <option>Select Subscription</option>
              <option>Plus</option>
              <option>Gold</option>
              <option>Platinum</option>
            </select>

            <textarea
              value={bio}
              placeholder="Bio"
              onChange={(e) => setBio(e.target.value)}
              className="p-3 border rounded"
            />
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="p-3 border rounded"
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input
              type="file"
              placeholder="Profile Image"
              accept="image/*"
              onChange={handleFileChange}
            />
            <button className="bg-cyberpunk-accent py-3 rounded font-bold text-white hover:bg-opacity-90 transition">
              Save Changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
