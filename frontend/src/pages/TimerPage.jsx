import React, { useState, useEffect } from "react";
import "../styles/TimerPage.css";

export default function TimerPage() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setSeconds(prev => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div className="page-container timer-container">
      <div className="hero-content">
        <h1>Focus and Track Your Work</h1>
        <p>Start the timer to measure your work hours efficiently.</p>
      </div>
      <div className="timer-display">
        <h2>{Math.floor(seconds/3600).toString().padStart(2,'0')}:
            {Math.floor((seconds%3600)/60).toString().padStart(2,'0')}:
            {(seconds%60).toString().padStart(2,'0')}
        </h2>
        <button onClick={() => setRunning(!running)}>
          {running ? "Pause" : "Start"}
        </button>
        <button onClick={() => setSeconds(0)}>Reset</button>
      </div>
    </div>
  );
}
