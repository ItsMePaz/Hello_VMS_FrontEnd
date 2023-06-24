import axios from "axios";

const baseURL = "http://localhost:5656/api/users";

let token = null;

function setToken(newToken) {
  token = `Bearer ${newToken}`;
}

function getUsers() {
  /* return fetch(baseURL)
    .then((res) => res.json())
    .then((data) => data); */
  return axios.get(baseURL).then((res) => res.data);
}

async function createUser(user) {
  const token = `Bearer ${user.adminToken}`;
  const config = {
    headers: { Authorization: token },
  };

  console.log(token);
  return axios.post(baseURL, user, config).then((res) => res.data);
}

export default {
  getUsers,
  createUser,
  setToken,
  /* updatePerson,
  deletePerson, */
};
