import React from "react";

import Field_Image from "../../assets/Field/field.jpg";
import Field_Image2 from "../../assets/Field/field2.jpg";
import Field_Image3 from "../../assets/Field/field3.jpg";

const HeaderImages = [Field_Image, Field_Image2, Field_Image3];

const ExploreGridSection = () => (
  <section className="p-8">
    <h2 className="text-3xl font-bold mb-6">Explore the Future</h2>
    <div className="flex flex-col items-center space-y-6">
      <div className="grid grid-cols-3 gap-4">
        {[0, 1, 2].map((i) => (
          <img
            key={i}
            src={HeaderImages[i]}
            alt="Cyberpunk"
            className="rounded-lg object-cover"
          />
        ))}
      </div>
    </div>
  </section>
);

export default ExploreGridSection;
