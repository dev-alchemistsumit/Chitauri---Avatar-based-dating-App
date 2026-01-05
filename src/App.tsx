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
import Help from "./components/common/Help";
import AboutUs from "./components/common/AboutUs";
import Register from "../src/auth/Register";
import Login from "../src/auth/Login";
import ProtectedRoute from "../src/auth/ProtectedRoute";
import PageNotFound from "../src/auth/PageNotFound";
import PublicRoute from "../src/auth/PublicRoute";

import UserProfile from "./components/User/UserProfile";

import Navbar from "./Header/Navbar"; // move inside protected layout
import SubscriptionPage from "./components/Subscription/SubscriptionPage";
import SubscriberAgreement from "./components/Subscription/Subscriber Agreement";
import PrivacyPolicy from "./components/common/Privacy Policy";
import PremierAccessSafetyTips from "./components/common/PremierAccessSafetyTips";
import IntellectualProperty from "./components/common/Intellectual Property";
import AccessibilityStatement from "./components/common/Accessibility Statement";
import Security from "./components/common/Security";
import Support from "./components/common/Support";
import Footer from "./components/footer/Footer";

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
                <Footer />
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
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/userprofile"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <UserProfile />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/subscription-page"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <SubscriptionPage />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/subscriber-agreement"
          element={
            <ProtectedRoute>
              <>
                <SubscriberAgreement />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <ProtectedRoute>
              <>
                <PrivacyPolicy />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/premier-access"
          element={
            <ProtectedRoute>
              <>
                <PremierAccessSafetyTips />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/intellectual-property"
          element={
            <ProtectedRoute>
              <>
                <IntellectualProperty />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/accessibility-statement"
          element={
            <ProtectedRoute>
              <>
                <AccessibilityStatement />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/creator"
          element={
            <ProtectedRoute>
              <>
              <Navbar />
                <Support />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/security"
          element={
            <ProtectedRoute>
              <>
                <Security />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route path="/avatar-room" element={<AvatarRoom />} />
        <Route path="/chat/:avatar" element={<AvatarRoom />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
