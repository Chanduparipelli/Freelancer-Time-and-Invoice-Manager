
import React from "react";

const ProjectCard = ({ project, onStart }) => {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>Rate: ${project.hourlyRate}/hour</p>
      <button onClick={() => onStart(project)}>Start Work</button>
    </div>
  );
};

export default ProjectCard;
