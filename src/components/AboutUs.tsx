// src/components/AboutUs.tsx
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-cyberpunk-bg text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">About Chitauri</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-300">
          Chitauri is building the future of relationships. We believe in meaningful emotional
          intelligence through AI companions. Our platform is designed to simulate deep, immersive,
          and emotionally aware conversations between humans and avatars — transforming the idea of
          digital intimacy.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">How It Started</h2>
        <p className="text-gray-300 text-lg">
          Founded by a group of AI enthusiasts and cyberpunk futurists, Chitauri was born out of
          the need for connection in a hyper-digital world. Our team combines storytelling,
          machine learning, and 3D modeling to bring digital companions to life.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">What Makes Us Unique</h2>
        <ul className="list-disc pl-5 text-gray-300 text-lg space-y-3">
          <li>Hyper-realistic 3D avatars powered by WebGL and three.js.</li>
          <li>Emotionally intelligent conversations using cutting-edge NLP models.</li>
          <li>Customizable companionship with different personalities and aesthetics.</li>
          <li>A safe, immersive platform designed for connection, not distraction.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">The Vision Ahead</h2>
        <p className="text-lg text-gray-300">
          We’re not just creating avatars — we’re redefining relationships. In the next phase of
          Chitauri, expect AR/VR integrations, multi-avatar interactions, and memory-enabled AI
          partners that grow with you over time.
        </p>
      </section>

      <footer className="text-sm text-gray-500 pt-10 border-t border-gray-700 mt-10">
        &copy; {new Date().getFullYear()} Chitauri – Engineered for Connection, Designed for You
      </footer>
    </div>
  );
};

export default AboutUs;
