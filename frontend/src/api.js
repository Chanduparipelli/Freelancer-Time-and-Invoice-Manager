import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8081/api",
});

export const getProjects = () => API.get("/projects");
export const startProject = (username, projectId) =>
  API.post(`/user-projects/start?username=${username}&projectId=${projectId}`);
export const endProject = (username, projectId, pricePerHour) =>
  API.post(`/user-projects/end?username=${username}&projectId=${projectId}&pricePerHour=${pricePerHour}`);
