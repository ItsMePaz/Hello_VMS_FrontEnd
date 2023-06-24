import axios from "axios";

const baseURL = "http://localhost:5656/api/persons";

let token = null;

function setToken(newToken) {
  token = `Bearer ${newToken}`;
}

function getVisitors() {
  /* return fetch(baseURL)
    .then((res) => res.json())
    .then((data) => data); */
  return axios.get(baseURL).then((res) => res.data);
}

async function createVisitor(visitor) {
  const token = `Bearer ${visitor.userToken}`;
  const config = {
    headers: { Authorization: token },
  };

  console.log(token);
  return axios.post(baseURL, visitor, config).then((res) => res.data);
}

export default {
  getVisitors,
  createVisitor,
  setToken,
  /* updatePerson,
  deletePerson, */
};
