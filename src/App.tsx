import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home";
import AvatarRoom from "./components/AvatarRoom";
import Help from "./components/Help";
import AboutUs from "./components/AboutUs";

import Register from "../src/auth/Register";
import Login from "../src/auth/Login";
import ProtectedRoute from "../src/auth/ProtectedRoute";
import PageNotFound from "../src/auth/PageNotFound";
import PublicRoute from "../src/auth/PublicRoute";

import UserProfile from "./components/User/UserProfile";

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
        <Route
          path="/chat/:character"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <AvatarRoom />
              </>
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
        <Route
          path="/Userprofile"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <UserProfile />
              </>
            </ProtectedRoute>
          }
        />

        {/* Default room for new users */}
        <Route path="/avatar-room" element={<AvatarRoom />} />
        {/* Avatar-specific chat */}
        <Route path="/chat/:avatar" element={<AvatarRoom />} />
        {/* Explicit 404 */}
        <Route path="/404" element={<PageNotFound />} />
        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/404" replace />} />
        {/* Catch-all 404 route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
