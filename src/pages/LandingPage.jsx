import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landingPage.css";
import database from "../images/database.png";
import analytics from "../images/analytics.png";
import wave from "../images/wave.png";

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
        <Link to="/Hello_VMS_FrontEnd/login_user">
          <div className="visitor-database user">
            USER <br />
            <img src={database} alt="Database_logo" />
          </div>{" "}
        </Link>
        <Link to="/Hello_VMS_FrontEnd/login_admin">
          <div className="visitor-database admin">
            ADMIN <br />
            <img src={database} alt="Database_logo" />
          </div>{" "}
        </Link>
      </section>
      <section class="wave-section">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
        <div class="wave wave4"></div>
      </section>
    </div>
  );
}

export default LandingPage;
