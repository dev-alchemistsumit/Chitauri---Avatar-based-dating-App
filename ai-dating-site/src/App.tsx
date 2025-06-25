import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AvatarRoom from "./components/AvatarRoom";
import RelationshipStats from "./components/RelationshipStats";
import Help from "./components/Help";
import AboutUs from "./components/AboutUs";

import Register from "../src/auth/Register";
import Login from "../src/auth/Login";
import ProtectedRoute from "../src/auth/ProtectedRoute";
import PageNotFound from "../src/auth/PageNotFound";
import PublicRoute from "../src/auth/PublicRoute";

import UserProfile from "./components/User/UserProfile"

import Navbar from "./Header/Navbar"; // move inside protected layout

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
  path="/profile"
  element={
    <ProtectedRoute>
      <UserProfile />
    </ProtectedRoute>
  }
/>

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Home />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/avatar-room"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <AvatarRoom />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/relationship-stats"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <RelationshipStats />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/help"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Help />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <AboutUs />
              </>
            </ProtectedRoute>
          }
        />
        {/* Catch-all 404 route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
