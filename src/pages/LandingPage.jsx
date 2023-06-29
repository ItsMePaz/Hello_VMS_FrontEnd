import { Link } from "react-router-dom";
import WaveAnimation from "../components/WaveAnimation";
import "../styles/landingPage.css";
import admin from "../images/admin.png";
import groupUsers from "../images/groupUsers.png";
import vmsLogo from "../images/vmslogo.png";
import Logo from "../images/placeholder.png";

function LandingPage() {
  return (
    <div className="menu-body">
      <h1
        className="title"
        /*    onClick={() => {
          console.log(window.localStorage.length);
        }} */
      >
        VISITOR MANAGEMENT SYSTEM
      </h1>
      <div className="header-color">
        <div className="logo-placement">
          <div className="company-logo tw-bg-white tw-mr-[5vh]">
            <img src={vmsLogo} alt="placeholder" />
          </div>
          <div className="company-logo">
            <img src={Logo} alt="placeholder" />
          </div>
        </div>
      </div>
      <section className="menu-options-landingpage tw-z-[1020]">
        <Link className="link" to="/login_user">
          <div className="visitor-database-landingpage user">
            USER <br />
            <img src={groupUsers} alt="Database_logo" />
          </div>{" "}
        </Link>
        <Link className="link" to="/login_admin">
          <div className="visitor-database-landingpage admin">
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
