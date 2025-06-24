// src/App.tsx

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import UserLogin from "./User/UserLogin";
import Navbar from "./Header/Navbar";
import Home from "./components/Home";
import AvatarRoom from "./components/AvatarRoom";
import RelationshipStats from "./components/RelationshipStats";
import Help from "./components/Help";
import AboutUs from "./components/AboutUs";

import Register from "../src/auth/Register"
import Login from "../src/auth/Login"
import ProtectedRoute from "../src/auth/ProtectedRoute"


function App() {
  return (
    <Router>
      {/* <UserLogin /> */}
      <Navbar />
<Routes>
  <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {/* <Dashboard /> */}
              <Home />
            </ProtectedRoute>
          }
        />

</Routes>
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
