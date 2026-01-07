// src/pages/Login.tsx
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetMode, setResetMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  /* ---------------- Login ---------------- */

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  /* ------------- Password Reset ---------- */

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email first.");
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent. Check your Inbox or Spam 💌");
      setResetMode(false);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md w-full mx-4 sm:mx-8 md:mx-0">
        <h2 className="text-3xl font-bold text-center text-cyberpunk-accent mb-6">
          {resetMode ? "Reset Password 🔐" : "Welcome Back 💘"}
        </h2>

        {/* LOGIN FORM */}
        {!resetMode && (
          <form onSubmit={handleLogin} className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-cyberpunk-accent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 pr-10 rounded-md border focus:outline-none focus:ring-2 focus:ring-cyberpunk-accent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-900"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              disabled={loading}
              className="bg-cyberpunk-accent text-white font-bold py-3 rounded hover:bg-opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Logging in…" : "Login"}
            </button>
          </form>
        )}

        {/* RESET FORM */}
        {resetMode && (
          <form
            onSubmit={handlePasswordReset}
            className="flex flex-col space-y-4"
          >
            <input
              type="email"
              placeholder="Enter your registered email"
              className="p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-cyberpunk-accent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              disabled={loading}
              className="bg-cyberpunk-accent text-white font-bold py-3 rounded hover:bg-opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send Reset Email"}
            </button>

            <button
              type="button"
              onClick={() => setResetMode(false)}
              className="text-sm text-gray-600 hover:underline"
            >
              ← Back to Login
            </button>
          </form>
        )}

        {/* FOOTER LINKS */}
        {!resetMode && (
          <>
            <p className="mt-3 text-sm text-center">
              <button
                onClick={() => setResetMode(true)}
                className="text-blue-700 hover:underline"
              >
                Forgot password?
              </button>
            </p>

            <p className="mt-4 text-sm text-center">
              New to Companion.ai?{" "}
              <Link to="/register" className="text-blue-700 hover:underline">
                Register Here
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;