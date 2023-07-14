import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://hellovms.onrender.com/api",
  headers: {
    common: {
      "Content-Type": "multipart/form-data",
    },
  },
});

function setToken(newToken) {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
}

// async function getVisitors() {
//   /* return fetch(baseURL)
//     .then((res) => res.json())
//     .then((data) => data); */
//   return axios.get(baseURL).then((res) => res.data);
// }
async function getVisitors() {
  const response = await apiClient.get("/persons");
  return response.data;
}

// async function createVisitor(visitor) {
//   const token = `Bearer ${visitor.userToken}`;
//   const config = {
//     headers: { Authorization: token },
//   }
//   console.log(token);
//   return axios.post(baseURL, visitor, config).then((res) => res.data);
// }
async function createVisitor(visitor) {
  const response = await apiClient.post("/persons", visitor);
  return response.data;
}

// async function exitVisitor(visitorId) {
//   const token = `Bearer ${visitorId.userToken}`;
//   const config = {
//     headers: { Authorization: token },
//   };

//   console.log(token);
//   return axios.put(exitURL, visitorId, config).then((res) => res.data);
// }
async function exitVisitor(visitorId) {
  const response = await apiClient.put(`/persons/${visitorId}`);
  return response.data;
}
export default {
  getVisitors,
  createVisitor,
  setToken,
  exitVisitor,
  /* updatePerson,
  deletePerson, */
};
