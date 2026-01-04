// src/components/Navbar.tsx
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [photoURL, setPhotoURL] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const loadProfileImage = async () => {
      if (!user) {
        setPhotoURL(null);
        return;
      }

      try {
        const ref = doc(db, "users", user.uid);
        const snap = await getDoc(ref);

        if (!active) return;

        if (snap.exists()) {
          setPhotoURL(snap.data().photoURL || null);
        }
      } catch (err) {
        console.warn("Failed to load profile image:", err);
      }
    };

    loadProfileImage();

    return () => {
      active = false;
    };
  }, [user]);

  const handleLogout = async () => {
    await signOut(auth);
    setOpen(false);
    navigate("/login");
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">

      <div className="flex items-center space-x-6">
        <Link to="/home" className="text-xl font-bold hover:text-cyberpunk-accent">
          Chitauri
        </Link>
        <Link to="/avatar-room" className="hover:text-cyberpunk-accent">
          Avatar Room
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <Link to="/help" className="hover:text-cyberpunk-accent">
          Help
        </Link>
        <Link to="/about" className="hover:text-cyberpunk-accent">
          About Us
        </Link>

        {user && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="focus:outline-none"
            >
              {photoURL ? (
                <img
                  src={photoURL}
                  alt="User avatar"
                  className="w-8 h-8 rounded-full object-cover border-2 border-cyberpunk-accent hover:opacity-90 transition"
                />
              ) : (
                <FaUserCircle size={28} className="hover:text-cyberpunk-accent" />
              )}
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg overflow-hidden z-50">
                <Link
                  to="/Userprofile"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-blue-100 transition"
                >
                  Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-red-100 hover:text-red-600 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
