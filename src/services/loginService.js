import axios from "axios";

const REACT_URL = import.meta.env.VITE_URL;

const baseUrl = REACT_URL + "api/login/user";

function login(credentials) {
  return axios.post(baseUrl, credentials).then((res) => res.data);
}

export default { login };
