import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login({ isLoggedIn }) {
  const navigate = useNavigate();

  // If already logged in, redirect to projects. 
  // Otherwise, stay on this splash screen.
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/projects", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const handleStart = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-content">
          <h1>Welcome to FreelanceForge</h1>
          <p>Are you free now? Pick a project, work, and earn on your own!</p>
          <button className="login-btn" onClick={handleStart}>
            Get Started
          </button>
        </div>
      </div>

      <div
        className="login-right"
        style={{
          backgroundImage: "url('/images/workspace.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}
