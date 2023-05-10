import React from "react";
import { Navigate } from "react-router";
import { useAppContext } from "../context/appContext";

const ProtectorRoute = ({ children }) => {
  const { user } = useAppContext();

  if (user) {
    return children;
  } else {
    return <Navigate to="/landing" />;
  }
};

export default ProtectorRoute;
