import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loginStyle.css";
import Logo from "../images/placeholder.png";
import "../App.css";
import "../styles/menu.css"; /* where I got the title class style */
import loginService from "../services/loginService";
import adminLoginService from "../services/adminLoginService";
import LoadingSpinner from "../components/LoadingSpinner";
import Menu from "./Menu";
import WaveAnimation from "../components/WaveAnimation";
import visitorService from "../services/visitorService";
function LogIn(
  {
    /*   loading,
  setLoading,
  username,
  setUsername,
  user,
  setUser,
  password,
  setPassword, */
  }
) {
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
    if (user?.token) navigate("/Hello_VMS_FrontEnd/menu");
  }, [user, navigate]);

  /*   useEffect(() => {
    if (!user) navigate("/Hello_VMS_FrontEnd/");
  }, [user, navigate]); */

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    loginService
      .login({ username, password })
      .then((res) => {
        window.localStorage.setItem("loggedUser", JSON.stringify(res));
        visitorService.setToken(res.token);
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
      <div className="logIn-card-position">
        <h1 className="title">VISITOR MANAGEMENT SYSTEM</h1>
        <br></br>
        <div className="login">
          <img src={Logo} alt="" className="tw-mb-[3em]" />
          <form onSubmit={handleLogin}>
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
            <div className="login-btn-placement tw-flex tw-gap-12">
              {/* <button type="submit"> */}
              <button /* There should be a link or navigateTo here */
                /*  to="/Hello_VMS_FrontEnd/menu" */
                className="cellButton tw-h-[3em] tw-w-[8.5em]"
                /*    onClick={() => {
                  console.log(window.localStorage.getItem.loggedUserJSON);
                }} */
              >
                USER LOGIN
              </button>
              {/* </button> */}
            </div>
          </form>
        </div>
      </div>
    );
  };
  if (loading) {
    return (
      <div className="tw-flex tw-flex-col tw-h-screen tw-items-center tw-justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  /*   return <div>{user == null ? loginForm() : <Menu user={user.name} />}</div>;
   */ return (
    <div>
      {loginForm()}{" "}
      <button onClick={() => navigate(-1)}>
        <div className="back-logout-btn back-placement tw-z-[1020]">BACK</div>
      </button>
      <WaveAnimation />
    </div>
  );
}

export default LogIn;
