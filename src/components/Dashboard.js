import React from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container1">
      <h1>Dashboard</h1>
      <button onClick={() => navigate("/task2")}>Task 2</button>
      <button onClick={() => navigate("/logout")}>Logout</button>
    </div>
  );
};

export default Dashboard;
