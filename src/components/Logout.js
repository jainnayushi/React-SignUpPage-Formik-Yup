import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "../Styles/Task1.css";

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    logout();
    navigate("/login");
  }, []);

  return <></>;
};

export default Logout;
