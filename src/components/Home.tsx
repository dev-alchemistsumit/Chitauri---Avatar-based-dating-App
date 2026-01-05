import { useState, useEffect } from "react";
import Field_Image from "../assets/Field/field.jpg";
import Field_Image2 from "../assets/Field/field2.jpg";
import Field_Image3 from "../assets/Field/field3.jpg";
import Hero from "./Home/Hero";
import AIList from "./Home/AIList";
import Review from "./Home/Review";
import Footer from "./footer/Footer";
import WelcomeModal from "../components/common/WelcomeModal";

const headerImages = [Field_Image, Field_Image2, Field_Image3];

const Home = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % headerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const accepted = localStorage.getItem("chitauri_welcome_accepted");
    if (!accepted) {
      setShowWelcome(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("chitauri_welcome_accepted", "true");
    setShowWelcome(false);
  };

  return (
    <div className="bg-cyberpunk-bg text-white relative">
      {showWelcome && <WelcomeModal onAccept={handleAccept} />}

      <Hero image={headerImages[carouselIndex]} />
      <AIList />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
