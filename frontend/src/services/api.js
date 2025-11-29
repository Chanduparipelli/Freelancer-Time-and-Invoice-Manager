// src/services/api.js
import axios from "axios";

// Base URL of your backend API
const API_BASE = "http://localhost:8080/api"; // Update when backend is ready

// ----- User Authentication -----
export const loginUser = async (email, password) => {
  try {
    // Mock response for now
    if (email === "user@example.com" && password === "123456") {
      return { success: true, user: { name: "John Doe", email } };
    } else {
      return { success: false, message: "Invalid credentials" };
    }
    // Uncomment for real backend
    // const response = await axios.post(`${API_BASE}/login`, { email, password });
    // return response.data;
  } catch (error) {
    console.error(error);
    return { success: false, message: "Server error" };
  }
};

// ----- Projects -----
export const fetchProjects = async () => {
  try {
    // Mock projects
    return [
      { id: 1, name: "Website Design", description: "Landing page", hourlyRate: 20 },
      { id: 2, name: "React App", description: "Frontend app", hourlyRate: 25 },
    ];
    // Real API call
    // const response = await axios.get(`${API_BASE}/projects`);
    // return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// ----- Time Logs -----
export const saveTimeLog = async (projectId, startTime, endTime, hoursWorked, totalPrice) => {
  try {
    // Mock save
    console.log("Time log saved:", { projectId, hoursWorked, totalPrice });
    return { success: true };
    // Real API call
    // const response = await axios.post(`${API_BASE}/timelogs`, { projectId, startTime, endTime, hoursWorked, totalPrice });
    // return response.data;
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};

// ----- Invoices -----
export const fetchInvoices = async () => {
  try {
    // Mock invoices
    return [
      { id: 1, projectName: "Website Design", hours: 10, rate: 20, total: 200 },
      { id: 2, projectName: "React App", hours: 15, rate: 25, total: 375 },
    ];
    // Real API call
    // const response = await axios.get(`${API_BASE}/invoices`);
    // return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
