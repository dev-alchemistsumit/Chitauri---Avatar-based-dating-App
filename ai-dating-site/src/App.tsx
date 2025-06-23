// src/App.tsx

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Home from "./components/Home";
import AvatarRoom from "./components/AvatarRoom";
import RelationshipStats from "./components/RelationshipStats";
import Help from "./components/Help";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avatar-room" element={<AvatarRoom />} />
        <Route path="/relationship-stats" element={<RelationshipStats />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;