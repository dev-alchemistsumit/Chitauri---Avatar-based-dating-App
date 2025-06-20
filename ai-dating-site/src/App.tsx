// src/App.tsx

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Home from "./components/Home";
import AvatarRoom from "./components/AvatarRoom";
import ChatInterface from "./components/ChatInterface";
import MatchMaker from "./components/MatchMaker";
import RelationshipStats from "./components/RelationshipStats";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avatar-room" element={<AvatarRoom />} />
        <Route path="/chat-interface" element={<ChatInterface />} />
        <Route path="/match-maker" element={<MatchMaker />} />
        <Route path="/relationship-stats" element={<RelationshipStats />} />
      </Routes>
    </Router>
  );
}

export default App;
