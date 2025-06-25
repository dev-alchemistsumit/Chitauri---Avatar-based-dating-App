// src/pages/Register.tsx
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

import register_Image from "../assets/register.jpg"
 
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
     style={{
        backgroundImage: register_Image ,
      }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md w-full mx-4 sm:mx-8 md:mx-0">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Create an Account 💑
        </h2>
        <form onSubmit={handleRegister} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
