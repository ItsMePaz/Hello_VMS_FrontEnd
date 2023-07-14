import axios from "axios";

const baseUrl = "https://hellovms.onrender.com/api/login/admin";

function login(credentials) {
  return axios.post(baseUrl, credentials).then((res) => res.data);
}

export default { login };
