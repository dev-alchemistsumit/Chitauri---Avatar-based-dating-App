import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ image }: { image: string }) => (
  <section className="relative h-screen overflow-hidden">
    <img
      src={image}
      alt="Cyberpunk header"
      className="absolute inset-0 w-full h-full object-cover opacity-60"
    />
    <div className="relative z-10 flex flex-col items-center justify-center h-full">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Chitauri</h1>
      <p className="text-xl md:text-2xl mb-6 text-center max-w-2xl">
        Craft your AI companion, explore Cyber relationships, and experience next-gen digital intimacy.
      </p>
      <Link
        to="/avatar-room"
        className="px-6 py-3 bg-cyberpunk-accent text-black rounded-lg font-semibold hover:bg-opacity-90"
      >
        Get Started
      </Link>
    </div>
  </section>
);

export default HeroSection;
