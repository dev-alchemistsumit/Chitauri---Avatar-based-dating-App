import React from "react";
import GirlInYellow from "../AvatarModel/girl_in_yellow";
import RussianGirl from "../AvatarModel/Russian_girl";

const models = [
  { id: "yellow", name: "Ava", Component: GirlInYellow },
  { id: "russian", name: "Chritina", Component: RussianGirl },
];

const AvatarPreviewSection = () => {
  return (
    <section className="p-8 bg-gradient-to-br from-cyberpunk-neonPurple to-cyberpunk-neonBlue">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        Interactive Avatars
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {models.map(({ id, name, Component }) => (
          <div
            key={id}
            className="bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-700 flex flex-col items-center"
          >
            <div className="w-full h-[350px] sm:h-[400px] md:h-[450px]">
              <Component />
            </div>
            <p className="mt-4 text-lg text-center font-semibold text-cyberpunk-accent">
              {name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AvatarPreviewSection;
