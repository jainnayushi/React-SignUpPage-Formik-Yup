import React, { useEffect, useMemo, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const ProtectedRoute = ({ children }) => {
  const validUser = JSON.parse(localStorage.getItem("validUser"));
  return validUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
