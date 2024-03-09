import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./auth/AuthContext";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import Task2 from "./components/Task2";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/logout" exact element={<Logout />} />
            <Route path="/register" exact element={<SignUp />} />
            <Route path="/task2" exact element={<Task2 />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/welcome"
              element={
                <ProtectedRoute>
                  <Welcome />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
