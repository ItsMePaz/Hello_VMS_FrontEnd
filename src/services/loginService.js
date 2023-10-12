import axios from "axios";

const baseUrl = "http://localhost:5656/api/login/user";

function login(credentials) {
  return axios.post(baseUrl, credentials).then((res) => res.data);
}

export default { login };
