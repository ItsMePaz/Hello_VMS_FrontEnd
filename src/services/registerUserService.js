import axios from "axios";

const baseUrl = "http://localhost:5656/api/users";

async function registerUser(credentials) {
  /*   console.log(credentials.adminToken); */
  /*  let token = `Bearer ${credentials.adminToken}`;
  console.log(token); */

  const config = {
    header: { Authorization: `Bearer ${credentials.adminToken}` },
  };

  console.log(config);

  return axios.post(baseUrl, credentials, config).then((res) => res.status);
}

export default { registerUser };
