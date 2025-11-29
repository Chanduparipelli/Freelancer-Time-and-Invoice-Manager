import React, { useEffect, useState } from "react";
import { getProjects, startProject } from "../api";
import { useNavigate } from "react-router-dom";
import "../styles/Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSelect = (project) => {
    const username = localStorage.getItem("username") || "guest";

    startProject(username, project.id)
      .then(() => {
        alert(`You started ${project.name}!`);
        navigate("/your-projects"); // redirect user
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="page-container projects-container">
      <div className="hero-content">
        <h1>Choose Your Next Project</h1>
        <p>Pick the project that fits your skills and start earning!</p>
      </div>
      <div className="projects-list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.name}</h3>
            <p>Price: ${project.pricePerHour}/hr</p>
            <button onClick={() => handleSelect(project)}>Select & Start</button>
          </div>
        ))}
      </div>
    </div>
  );
}
