// src/components/Navbar.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link
          to="/home"
          className="text-xl font-bold hover:text-cyberpunk-accent"
        >
          Chitauri
        </Link>
        <Link to="/avatar-room" className="hover:text-cyberpunk-accent">
          Avatar Room
        </Link>
        <Link to="/relationship-stats" className="hover:text-cyberpunk-accent">
          Relationship Stats
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/help" className="hover:text-cyberpunk-accent">
          Help
        </Link>
        <Link to="/about" className="hover:text-cyberpunk-accent">
          About Us
        </Link>
        {user && (
          <div className="relative group">
            <Link to="/Userprofile">
              <button className="flex items-center space-x-2 hover:text-cyberpunk-accent">
                <FaUserCircle size={24} />
                <span className="hidden sm:block">Profile</span>
              </button>
            </Link>
            {/* Dropdown shown on hover */}
            <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 z-50">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-red-100 hover:text-red-600 transition rounded"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
