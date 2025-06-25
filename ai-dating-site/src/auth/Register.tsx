// src/pages/Register.tsx
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bio: "",
    gender: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { email, password, ...profileData } = formData;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), profileData);
      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1530023367847-a683933f417c?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md w-full mx-4 sm:mx-8 md:mx-0">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Create an Account 💑
        </h2>
        <form onSubmit={handleRegister} className="flex flex-col space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            className="p-3 rounded-md border"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="age"
            type="number"
            placeholder="Age"
            className="p-3 rounded-md border"
            value={formData.age}
            onChange={handleChange}
          />
          <input
            name="bio"
            placeholder="Short Bio"
            className="p-3 rounded-md border"
            value={formData.bio}
            onChange={handleChange}
          />
          <select
            name="gender"
            className="p-3 rounded-md border"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="p-3 rounded-md border"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="p-3 rounded-md border"
            value={formData.password}
            onChange={handleChange}
          />
          <button className="bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition">
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Already a user?{' '}
          <Link to="/login" className="text-blue-700 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
