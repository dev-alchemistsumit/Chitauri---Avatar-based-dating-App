// src/auth/PublicRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;
  if (user) return <Navigate to="/home" replace />;

  return children;
};

export default PublicRoute;
