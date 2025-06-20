import React from "react";
import { Link } from "react-router-dom";
import AvatarModel from "../AvatarModel/Russian_Girl_AvatarModel";

const aiList = [
  { id: 1, name: "Ava", status: "Available", link: "/chat-interface" },
  { id: 2, name: "Luna", status: "In Chat", link: "/chat-interface" },
  { id: 3, name: "Alexa", status: "Available", link: "/chat-interface" },
  { id: 4, name: "Tim", status: "Available", link: "/chat-interface" },
  { id: 5, name: "Carolin", status: "In Chat", link: "/chat-interface" },
  { id: 6, name: "Cypher", status: "Available", link: "/chat-interface" },
];

const AIListSection = () => (
  <section className="p-8">
    <h2 className="text-3xl font-bold mb-6">Meet Our AI Companions</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {aiList.map((ai) => (
        <Link to={ai.link} key={ai.id} className="block">
          <div className="bg-gray-800 rounded-lg p-4 hover:ring-2 hover:ring-cyberpunk-accent transition">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">{ai.name}</h3>
              <span
                className={`h-3 w-3 rounded-full ${
                  ai.status === "Available" ? "bg-green-400" : "bg-yellow-400"
                } animate-pulse`}
              />
            </div>
            <p className="text-gray-400 mb-4">Status: {ai.status}</p>
            <button className="px-4 py-2 bg-cyberpunk-accent text-black rounded hover:bg-opacity-90">
              Chat Now
            </button>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default AIListSection;
