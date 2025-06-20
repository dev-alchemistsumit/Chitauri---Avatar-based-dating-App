// src/components/Home.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Field_Image from "../assets/Field/field.jpg";
import Field_Image2 from "../assets/Field/field2.jpg";
import Field_Image3 from "../assets/Field/field3.jpg";

import Hero from "../components/HomeComponents/Hero";
import AIList from "../components/HomeComponents/AIList";
import AvatarPreview from "../components/HomeComponents/AvatarPreview";
import Review from "../components/HomeComponents/Review";
import ExploreGrid from "../components/HomeComponents/ExploreGrid";
import Footer from "../components/HomeComponents/Footer";

const headerImages = [Field_Image, Field_Image2, Field_Image3];

const Home = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % headerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-cyberpunk-bg text-white">
      <Hero image={headerImages[carouselIndex]} />
      <AIList/>
      <AvatarPreview/>
      <Review />
      <ExploreGrid />
      <Footer />
    </div>
  );
};

export default Home;
