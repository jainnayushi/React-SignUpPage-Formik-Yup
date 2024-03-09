import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email) => {
    if (localStorage.getItem("user") === email) {
      localStorage.setItem("validUser", true);
      return true;
    } else {
      localStorage.setItem("validUser", false);
      return false;
    }
  };

  const logout = () => {
    localStorage.setItem("validUser", false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
