import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loginStyle.css";
import Logo from "../images/placeholder.png";
import "../src/App.css";
import "../styles/menu.css"; /* where I got the title class style */
import loginService from "../services/loginService";
import Menu from "./Menu";

function LogIn() {
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

  const handleLogin = (e) => {
    e.preventDefault();

    loginService
      .login({ username, password })
      .then((res) => {
        window.localStorage.setItem("loggedUser", JSON.stringify(res));

        setUser(res);
        setUsername("");
        setPassword("");
      })
      .catch((error) => alert(error.response.data.error));
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
                onClick={() => {
                  console.log(window.localStorage.getItem.loggedUserJSON);
                }}
              >
                USER LOGIN
              </button>
              {/* </button> */}
              <Link
                to="/Hello_VMS_FrontEnd/user_management"
                className="cellButton  tw-h-[3em] tw-w-[8.5em]"
              >
                ADMIN LOGIN
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  };

  /*   return <div>{user == null ? loginForm() : <Menu user={user.name} />}</div>;
   */ return <div>{loginForm()}</div>;
}

export default LogIn;
