import { Link } from "react-router-dom";
import "../styles/header.css";

function BackLogoutBtn({ location }) {
  return (
    <div>
      <Link to={location}>
        <div className="back-logout-btn back-placement">BACK</div>
      </Link>
      <Link to="/Hello_VMS_FrontEnd/">
        <div className="back-logout-btn logout-placement">LOG OUT</div>
      </Link>
    </div>
  );
}

export default BackLogoutBtn;
