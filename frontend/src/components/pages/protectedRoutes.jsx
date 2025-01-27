import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken"); // Retrieve token

  // If token doesn't exist, redirect to the login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  return children; // Render the protected component if authenticated
};

export default ProtectedRoute;
