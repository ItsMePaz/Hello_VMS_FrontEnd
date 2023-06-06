import { Link } from "react-router-dom";
import "../styles/menu.css";
import database from "../images/database.png";
import analytics from "../images/analytics.png";
import monitor from "../images/monitor.png";

function Menu() {
  return (
    <div className="menu-body">
      <h1 className="title">VISITOR MANAGEMENT SYSTEM</h1>
      <div className="logo-placement">
        <div className="company-logo">
          COMPANY <br />
          LOGO
        </div>
      </div>
      <section className="menu-options">
        <Link className="links" to="/Hello_VMS_FrontEnd/menu/visitor_database">
          <div className="visitor-database">
            VISITOR <br /> DATABASE <br />
            <img src={database} alt="" />
          </div>{" "}
        </Link>
        <Link className="links" to="/Hello_VMS_FrontEnd/menu/monitoring">
          <div className="monitoring-mode">
            MONITOR <br /> MODE <br /> <img src={monitor} alt="" />
          </div>
        </Link>
        <Link className="links" to="/Hello_VMS_FrontEnd/menu/analytics">
          <div className="analytics">
            VISITOR <br /> ANALYTICS <br /> <img src={analytics} alt="" />
          </div>
        </Link>
      </section>
      <p className="greeting">Hello Mx. User! Where to today?</p>
      <div className="logout-btn-placement">
        <Link className="links" to="/Hello_VMS_FrontEnd/">
          <p className="logout-btn">LOG OUT</p>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
