import React, { useState } from "react";
import "../styles/Profile.css";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Profile updated!\nName: ${name}\nEmail: ${email}\nHourly Rate: $${hourlyRate}`);
    // Here you can also save data to localStorage or backend later
  };

  return (
    <div className="page-container profile-container">
      <div className="hero-content">
        <h1>Your Profile</h1>
        <p>Update your personal information and manage your freelancer account.</p>
      </div>

      <div className="profile-form">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </label>
          <label>
            Hourly Rate ($):
            <input
              type="number"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              placeholder="Enter your hourly rate"
              required
            />
          </label>
          <button type="submit">Update Profile</button>
        </form>
      </div>
    </div>
  );
}
