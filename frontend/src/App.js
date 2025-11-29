import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import TimerPage from "./pages/TimerPage";
import InvoicePage from "./pages/InvoicePage";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";
import YourProjects from "./pages/YourProjects";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";

// Components
import Navbar from "./components/Navbar";

// Global styles
import "./styles/styles.css";
import "./styles/Login.css";
import "./styles/Dashboard.css";
import "./styles/Projects.css";
import "./styles/TimerPage.css";
import "./styles/InvoicePage.css";
import "./styles/Navbar.css";
import "./styles/YourProjects.css";
import "./styles/HomePage.css";
import "./styles/Signup.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Router>
      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        <Route path="/" element={<Login isLoggedIn={isLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Navigate to="/home" /> : <Dashboard setIsLoggedIn={setIsLoggedIn} />}
        />
        {isLoggedIn ? (
          <>
            <Route path="/home" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/your-projects" element={<YourProjects />} />
            <Route path="/timer" element={<TimerPage />} />
            <Route path="/invoice" element={<InvoicePage />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;