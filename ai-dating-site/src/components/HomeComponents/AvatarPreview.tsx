import React from "react";
import AvatarModel from "../AvatarModel/Russian_Girl_AvatarModel";

const AvatarPreviewSection = () => (
  <section className="p-8 bg-gradient-to-br from-cyberpunk-neonPurple to-cyberpunk-neonBlue">
    <h2 className="text-3xl font-bold mb-6 text-center">Interactive Avatar Preview</h2>
    <div className="w-full h-[500px]">
      <AvatarModel />
    </div>
  </section>
);

export default AvatarPreviewSection;
