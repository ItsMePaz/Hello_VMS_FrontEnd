import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loginStyle.css";
import Logo from "../images/placeholder.png";
import vmsLogo from "../images/vmslogo.png";

import "../App.css";
import "../styles/menu.css"; /* where I got the title class style */
import WaveAnimation from "../components/WaveAnimation";
import adminLoginService from "../services/adminLoginService";
import LoadingSpinner from "../components/LoadingSpinner";
import userService from "../services/visitorService";
import registerUserService from "../services/registerUserService";

function LoginAdmin() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.token) navigate("/Hello_VMS_FrontEnd/user_management");
  }, [user, navigate]);

  /* Admin Login */
  const handleAdminLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    adminLoginService
      .login({ username, password })
      .then((res) => {
        window.localStorage.setItem("loggedUser", JSON.stringify(res));
        /* registerUserService.setToken(res.token); */

        console.log(res.token);
        setUser(res);
        setUsername("");
        setPassword("");
      })
      .catch((error) => alert(error.response.data.error))
      .finally(() => setLoading(false));
  };

  const loginForm = () => {
    return (
      <div className="logIn-card-position tw-z-[2000]">
        <h1 className="title">VISITOR MANAGEMENT SYSTEM</h1>
        <br></br>
        <div className="login ">
          <div className="tw-flex tw-justify-center tw-gap-[2em]">
            <div className="">
              <img
                src={vmsLogo}
                alt="placeholder"
                className=" tw-h-[6em] tw-min-w-[6em] "
              />
            </div>
            <img
              src={Logo}
              alt=""
              className="tw-mb-[3em] tw-w-[8em] tw-h-[6em] tw-mr-[-10%]"
            />
          </div>
          <form onSubmit={handleAdminLogin}>
            <div className="tw-flex tw-flex-col tw-items-center">
              {" "}
              <label htmlFor="email">Username:</label>
              <input
                className="input-style"
                type="text"
                name="Username"
                placeholder="Username"
                id="uname"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <br />
              <label>Password:</label>
              <input
                className="input-style "
                type="password"
                name="log"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>{" "}
            </div>

            <br />
            <div className="login-btn-placement  ">
              <button /* There should be a link or navigateTo here */
                /*  to="/Hello_VMS_FrontEnd/menu" */
                className="cellButton tw-h-[3em] tw-w-[8.5em]"
                /*  onClick={() => {
                  console.log(window.localStorage.getItem.loggedUserJSON);
                }} */
              >
                ADMIN LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  if (loading) {
    return (
      <div className="tw-flex tw-flex-col tw-h-screen tw-items-center tw-justify-center">
        <LoadingSpinner loadingMessage="Logging in as Admin..." />
      </div>
    );
  }
  /*   return <div>{user == null ? loginForm() : <Menu user={user.name} />}</div>;
   */ return (
    <div>
      {loginForm()}{" "}
      <button onClick={() => navigate(-1)}>
        <div className="back-logout-btn back-placement tw-z-[1020] tw-bottom-[1em]">
          BACK
        </div>
      </button>
      <WaveAnimation />
    </div>
  );
}

export default LoginAdmin;
