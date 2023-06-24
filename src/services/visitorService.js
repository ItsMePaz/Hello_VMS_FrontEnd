import axios from "axios";

const baseURL = "http://localhost:5656/api/persons";

function getVisitors() {
  return fetch(baseURL)
    .then((res) => res.json())
    .then((data) => data);
}

async function createVisitor(visitor) {
  return fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(visitor),
  })
    .then((res) => res.json())
    .then((data) => data);
}
/* const apiClient = axios.create({
  baseURL: "http://localhost:5656/api",
  headers: {
    common: {
      "Content-Type": "multipart/form-data",
    },
  },
}); */

/* async function register(credentials) {
  return axios.post(baseURL, credentials).then((res) => res.data);
} */

/* function setToken(newToken) {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
} */

/* async function getVisitors() {
  const response = await apiClient.get("/persons");
  return response.data;
} */

/* async function createVisitor(visitor) {
  const response = await apiClient.post("/persons", user);
  return response.data;
} */

/* async function updateUser(id, user) {
  const response = await apiClient.put(`/users/${id}`, user);
  return response.data;
} */

/* async function deletePerson(id) {
  const response = await apiClient.delete(`/users/${id}`);
  return response.status;
} */

export default {
  getVisitors,
  createVisitor,
  /* updatePerson,
  deletePerson, */
  /*  setToken, */
  /* register, */
};
