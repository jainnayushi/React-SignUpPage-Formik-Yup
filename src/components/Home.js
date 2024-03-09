import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container1">
        <h1>Home Page</h1>
        <div>
          <button className="box-buttons" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="box-buttons" onClick={() => navigate("/register")}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
