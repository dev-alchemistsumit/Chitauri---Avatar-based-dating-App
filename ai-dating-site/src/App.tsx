// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Home from "./components/Home";
import AvatarRoom from "./components/AvatarRoom";
import ChatInterface from "./components/ChatInterface";
import MatchMaker from "./components/MatchMaker";
import RelationShipStats from "./components/RelationshipStats";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avatar-room" element={<AvatarRoom />} />
        <Route path="/chat-interface" element={<ChatInterface />} />
        <Route path="/match-maker" element={<MatchMaker />} />
        <Route path="/relationship-stats" element={<RelationShipStats />} />
      </Routes>
    </Router>
  );
}

export default App;
