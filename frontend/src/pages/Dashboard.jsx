import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Dashboard.css";

export default function Dashboard({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const defaultPassword = "123";

    if (password === defaultPassword) {
      localStorage.setItem("username", username);
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      navigate("/home", { replace: true });
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="overlay">
        <div className="dashboard-card">
          <h1>Welcome Back, Freelancer!</h1>
          <p>
            Track your time, manage your projects, and see your earnings grow.
          </p>

          <form className="credentials-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-submit">
              Save & Continue
            </button>
          </form>
          <p className="signup-link">
            Not a user? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}