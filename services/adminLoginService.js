import axios from "axios";

const baseUrl = "http://localhost:3005/api/admin-login";

function login(credentials) {
  return axios.post(baseUrl, credentials).then((res) => res.data);
}

export default { login };