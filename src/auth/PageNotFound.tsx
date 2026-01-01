// src/pages/PageNotFound.tsx
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-md w-full">
        <h1 className="text-5xl font-bold text-pink-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Looks like you've stumbled into the void of broken hearts 💔. But don’t worry — you can still find your match!
        </p>
        <Link
          to="/login"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
