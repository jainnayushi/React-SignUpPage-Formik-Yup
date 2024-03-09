import React, { useCallback, useState } from "react";
import "../Styles/Task1.css";
import InputField from "./InputField";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const validUser = login(email);
    validUser ? navigate("/dashboard") : navigate("/");
  };

  return (
    <>
      <div className="container">
        <div className="right">
          <img
            src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="left">
          <div className="header">
            <h1>Welcome Back! </h1>
            <p>Please login!</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputfield">
              <label htmlFor={email}>Email</label>
              <input
                label="Email"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <InputField label="Password" name="password" type="text" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
