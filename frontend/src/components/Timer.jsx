
import React, { useState, useEffect } from "react";

const Timer = ({ project }) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const hoursWorked = (seconds / 3600).toFixed(2);
  const totalPrice = (hoursWorked * project.hourlyRate).toFixed(2);

  return (
    <div className="timer">
      <h2>{project.name}</h2>
      <p>
        Time: {Math.floor(seconds / 3600)}:{Math.floor((seconds % 3600) / 60)}:{seconds % 60}
      </p>
      <button onClick={() => setIsRunning(true)} disabled={isRunning}>Start</button>
      <button onClick={() => setIsRunning(false)} disabled={!isRunning}>Pause</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <p>Hours Worked: {hoursWorked}</p>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default Timer;
