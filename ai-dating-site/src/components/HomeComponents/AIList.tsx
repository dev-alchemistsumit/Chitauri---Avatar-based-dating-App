// src/components/HomeComponents/AIListSection.tsx

import React from "react";
import { Link } from "react-router-dom";
import GirlInYellow from "../AvatarModels/girl_in_yellow";
import RussianGirl from "../AvatarModels/Russian_Girl_AvatarModel";

const models = [
  {
    id: "yellow",
    name: "Ava",
    Component: GirlInYellow,
    status: "Available",
    link: "/avatar-room",
    description:
      "An AI companion eager to meet you. Intimacy and connection awaits.",
  },
  {
    id: "russian",
    name: "Christina",
    Component: RussianGirl,
    status: "Available",
    link: "/avatar-room",
    description:
      "She understands your silence. Built to comfort, crafted to connect. Your AI story begins here.",
  },
];

const AIListSection = () => {
  return (
    <section className="p-8 bg-gradient-to-br from-cyberpunk-neonPurple to-cyberpunk-neonBlue">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        Interactive AI Companions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {models.map(({ id, name, Component, status, link, description }) => (
          <div
            key={id}
            className="bg-gray-900 p-5 rounded-xl shadow-lg border border-gray-700 flex flex-col relative"
          >
            {/* Status dot */}
            <div className="absolute top-4 right-4 flex items-center space-x-2">
              <span
                className={`h-3 w-3 rounded-full ${
                  status === "Available" ? "bg-green-400" : "bg-yellow-400"
                } animate-pulse`}
              />
            </div>

            {/* 3D Avatar */}
            <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] mb-4">
              <Component />
            </div>

            {/* Name & Description */}
            <h3 className="text-2xl font-semibold text-center text-cyberpunk-accent mb-2">
              {name}
            </h3>
            <p className="text-gray-300 text-center mb-4">{description}</p>

            {/* Chat Now Button */}
            <Link
              to={link}
              state={{ selectedAvatar: id }} // Pass avatar identifier
              className="self-center mt-auto bg-cyberpunk-accent text-black font-medium px-5 py-2 rounded hover:bg-opacity-90 transition"
            >
              Chat Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AIListSection;
