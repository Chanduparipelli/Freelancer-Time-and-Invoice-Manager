
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaProjectDiagram, FaClock, FaFileInvoice } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <Link to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}><FaHome /> Dashboard</Link>
      <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}><FaProjectDiagram /> Projects</Link>
      <Link to="/timer" className={location.pathname === "/timer" ? "active" : ""}><FaClock /> Timer</Link>
      <Link to="/invoice" className={location.pathname === "/invoice" ? "active" : ""}><FaFileInvoice /> Invoices</Link>
    </div>
  );
};

export default Sidebar;
