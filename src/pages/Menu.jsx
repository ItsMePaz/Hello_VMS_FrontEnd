import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/menu.css";
import database from "../images/database.png";
import analytics from "../images/analytics.png";
import monitor from "../images/monitor.png";
import WaveAnimation from "../components/WaveAnimation";

function Menu() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.length === 0) navigate("/Hello_VMS_FrontEnd/");
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/Hello_VMS_FrontEnd/", { replace: true });
    console.log("You have been loggedout");
    /* setUser(null); */
  };

  return (
    <div className="menu-body">
      <h1 className="title">VISITOR MANAGEMENT SYSTEM</h1>
      <div className="header-color">
        <div className="logo-placement">
          <div className="company-logo">
            <img src="" alt="placeholder" />
          </div>
        </div>
      </div>
      <section className="menu-options">
        <Link className="links" to="/Hello_VMS_FrontEnd/menu/visitor_database">
          <div className="visitor-database">
            VISITOR <br /> DATABASE <br />
            <img src={database} alt="Database_logo" />
          </div>{" "}
        </Link>
        <Link className="links" to="/Hello_VMS_FrontEnd/menu/monitoring">
          <div className="monitoring-mode">
            MONITOR <br /> MODE <br /> <img src={monitor} alt="Monitor_logo" />
          </div>
        </Link>
        <Link className="links " to="/Hello_VMS_FrontEnd/menu/analytics">
          <div className="analytics">
            VISITOR <br /> ANALYTICS <br />{" "}
            <img src={analytics} alt="Analytics_logo" />
          </div>
        </Link>
      </section>
      <section className="menu-options2 tw-z-[1020]">
        <p className="greeting">Hello Mx. {user.name}! Where to today?</p>
        <div className="logout-btn-placement tw-z-[1020]">
          <button
            className="links"
            onClick={() => {
              handleLogout();
            }} /* to="/Hello_VMS_FrontEnd/" */
          >
            <p className="logout-btn ">LOG OUT</p>
          </button>
        </div>
      </section>
      <WaveAnimation />
    </div>
  );
}

export default Menu;
