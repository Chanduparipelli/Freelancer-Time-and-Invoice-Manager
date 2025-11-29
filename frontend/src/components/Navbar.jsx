import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    setIsLoggedIn(false); // Update the state in App.jsx
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo">FreelanceForge</div>
      <div className="nav-links">
        {/* Correctly link to the /home route */}
        <NavLink to="/home" className="nav-link">
          <span>Home</span> <span className="icon"></span>
        </NavLink>
        
        <NavLink to="/projects" className="nav-link">
          <span>Projects</span> <span className="icon"></span>
        </NavLink>
        <NavLink to="/your-projects" className="nav-link">
          <span>Your Projects</span> <span className="icon"></span>
        </NavLink>
        <NavLink to="/timer" className="nav-link">
          <span>Timer</span> <span className="icon"></span>
        </NavLink>
        <NavLink to="/invoice" className="nav-link">
          <span>Invoices</span> <span className="icon"></span>
        </NavLink>
        <NavLink to="/reports" className="nav-link">
          <span>Reports</span> <span className="icon"></span>
        </NavLink>
        <NavLink to="/profile" className="nav-link">
          <span>Profile</span> <span className="icon"></span>
        </NavLink>
        <button className="logout-btn" onClick={handleLogout}>
          Logout 
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
