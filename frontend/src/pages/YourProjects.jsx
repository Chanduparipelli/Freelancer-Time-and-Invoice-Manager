import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/YourProjects.css";

export default function YourProjects() {
  const [userProjects, setUserProjects] = useState([]);
  const [viewingDetails, setViewingDetails] = useState(null);
  const username = localStorage.getItem("username") || "guest";

  // Function to calculate a random progress percentage for demonstration
  const calculateProgress = () => {
    return Math.floor(Math.random() * 100);
  };

  useEffect(() => {
    // Fetch user projects with project details
    axios
      .get(`http://localhost:8081/api/user-projects?username=${username}`)
      .then((res) => {
        // Add a random progress value to each project for demonstration
        const projectsWithProgress = res.data.map(p => ({
          ...p,
          progress: p.endTime ? 100 : calculateProgress(),
        }));
        setUserProjects(projectsWithProgress);
      })
      .catch((err) => console.error(err));
  }, [username]);

  const handleComplete = (id) => {
    const pricePerHour = 20; // example, you can change dynamically
    axios
      .post(`http://localhost:8081/api/projects/complete`, null, {
        params: { userProjectId: id, pricePerHour },
      })
      .then((res) => {
        // After completing, update the state to reflect the change
        setUserProjects((prev) =>
          prev.map((p) => (p.id === id ? { ...p, ...res.data, progress: 100 } : p))
        );
        alert(`Project ${res.data.projectName} completed!`);
      })
      .catch((err) => console.error(err));
  };
  
  const toggleDetails = (id) => {
    setViewingDetails(viewingDetails === id ? null : id);
  };

  return (
    <div className="page-container your-projects-container">
      <h1>Your Projects</h1>
      {userProjects.length === 0 ? (
        <p>No active projects yet.</p>
      ) : (
        <div className="projects-list-horizontal">
          {userProjects.map((up) => (
            <div className="project-card-horizontal" key={up.id}>
              <div className="project-info-horizontal">
                <div className="project-meta">
                  <h3>{up.projectName}</h3>
                  {up.endTime ? (
                    <span className="status-badge completed">Completed</span>
                  ) : (
                    <span className="status-badge progress">In Progress</span>
                  )}
                </div>
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: `${up.progress}%` }}></div>
                </div>
                <p className="progress-text">{up.progress}% Complete</p>
              </div>

              <div className="card-actions">
                <button className="details-toggle-btn" onClick={() => toggleDetails(up.id)}>
                  {viewingDetails === up.id ? "Hide Details" : "View Details"}
                </button>
                {!up.endTime && (
                  <button onClick={() => handleComplete(up.id)} className="complete-btn">
                    Complete
                  </button>
                )}
              </div>
              
              {viewingDetails === up.id && (
                <div className="project-details">
                  <p><strong>Started:</strong> {new Date(up.startTime).toLocaleString()}</p>
                  {up.endTime && <p><strong>Completed:</strong> {new Date(up.endTime).toLocaleString()}</p>}
                  {up.endTime && <p><strong>Total Amount:</strong> ${up.totalAmount.toFixed(2)}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}