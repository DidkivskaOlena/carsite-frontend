import { useAuth } from "./hooks/useAuth";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const RestrictedRoute = ({ redirectTo = "/", component: Component }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};