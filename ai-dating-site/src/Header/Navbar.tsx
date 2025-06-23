// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-xl font-bold hover:text-cyberpunk-accent">
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
      </div>
    </nav>
  );
};

export default Navbar;
