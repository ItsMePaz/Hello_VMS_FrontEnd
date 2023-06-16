import { Link } from "react-router-dom";
import "../styles/loginStyle.css";
import Logo from "../images/placeholder.png";
import "../src/App.css";
import "../styles/menu.css"; /* where I got the title class style */

function LogIn() {
  return (
    <div className="logIn-card-position">
      <h1 className="title">VISITOR MANAGEMENT SYSTEM</h1>
      <br></br>
      <div className="login">
        <img src={Logo} alt="" className="tw-mb-[3em]" />

        <label htmlFor="email">Email:</label>
        <input
          className="input-style"
          type="text"
          name="Username"
          placeholder="Username"
          id="uname"
        ></input>
        <br />
        <label>Password:</label>
        <input
          className="input-style"
          type="password"
          name="log"
          placeholder="Password"
          id="password"
        ></input>
        <br />
        <div className="login-btn-placement tw-flex tw-gap-12">
          <Link
            to="/Hello_VMS_FrontEnd/menu"
            className="cellButton tw-h-[3em] tw-w-[8.5em]"
          >
            ADMIN LOGIN
          </Link>
          <Link
            to="/Hello_VMS_FrontEnd/user_management"
            className="cellButton tw-w-[13em]"
          >
            MANAGEMENT LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
