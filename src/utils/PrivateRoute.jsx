import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import Loading from "../components/global/Loading";

export function PrivateRoute({ children }) {
  const { isSignedIn, isLoaded } = useAuth();
  
  if (!isLoaded) {
    return <Loading/>
  }

  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}
