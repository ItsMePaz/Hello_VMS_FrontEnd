import { Link } from "react-router-dom";
import WaveAnimation from "../components/WaveAnimation";
import "../styles/landingPage.css";
import admin from "../images/admin.png";
import groupUsers from "../images/groupUsers.png";

function LandingPage() {
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
        <Link className="link" to="/Hello_VMS_FrontEnd/login_user">
          <div className="visitor-database user">
            USER <br />
            <img src={groupUsers} alt="Database_logo" />
          </div>{" "}
        </Link>
        <Link className="link" to="/Hello_VMS_FrontEnd/login_admin">
          <div className="visitor-database admin">
            ADMIN <br />
            <img src={admin} alt="Database_logo" />
          </div>{" "}
        </Link>
      </section>
      <WaveAnimation />
    </div>
  );
}

export default LandingPage;
