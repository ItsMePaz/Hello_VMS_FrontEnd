import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";

function BackLogoutBtn() {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/Hello_VMS_FrontEnd/", { replace: true });
    console.log("You have been loggedout");
  };
  return (
    <div>
      <button onClick={() => navigate(-1)}>
        <div className="back-logout-btn back-placement">BACK</div>
      </button>
      <button
        className="back-logout-btn logout-placement"
        onClick={() => {
          handleLogout();
        }} /* to="/Hello_VMS_FrontEnd/" */
      >
        <p className="logout-btn">LOG OUT</p>
      </button>
      {/*   <Link to="/Hello_VMS_FrontEnd/">
        <div className="back-logout-btn logout-placement">LOG OUT</div>
      </Link> */}
    </div>
  );
}

export default BackLogoutBtn;
