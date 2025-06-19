// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-around">
      <Link to="/" className="hover:text-blue-300">Home</Link>
      <Link to="/avatar-room" className="hover:text-blue-300">Avatar Room</Link>
      <Link to="/chat-interface" className="hover:text-blue-300">Chat Interface</Link>
      <Link to="/match-maker" className="hover:text-blue-300">Match Maker</Link>
      <Link to="/relationship-stats" className="hover:text-blue-300">Relationship Stats</Link>
    </nav>
  );
};

export default Navbar;