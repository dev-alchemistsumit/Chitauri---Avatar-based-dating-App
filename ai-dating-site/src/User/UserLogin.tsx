// src/components/Header.tsx
import React from "react"; // REQUIRED!

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      <Link
        to="/"
        className="text-2xl font-bold tracking-tight text-cyberpunk-accent"
      >
        Chitauri
      </Link>

      <nav className="flex items-center space-x-4">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-4 py-2 rounded bg-cyberpunk-accent text-black font-bold hover:bg-opacity-80">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </nav>
    </header>
  );
};

export default Header;
