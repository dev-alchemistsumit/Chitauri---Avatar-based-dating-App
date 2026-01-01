// src/pages/Login.tsx
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate , Link} from "react-router-dom";



const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
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
          "url('https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md w-full mx-4 sm:mx-8 md:mx-0">
        <h2 className="text-3xl font-bold text-center text-cyberpunk-accent mb-6">
          Welcome Back 💘
        </h2>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-cyberpunk-accent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-cyberpunk-accent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-cyberpunk-accent text-black font-bold py-3 rounded hover:bg-opacity-90 transition">
            Login
          </button>
        </form>
         <p className="mt-4 text-sm text-center">
                  New to Chitauri?{' '}
                  <Link to="/register" className="text-blue-700 hover:underline">
                    Register Here
                  </Link>
                </p>
      </div>
    </div>
  );
};

export default Login;
