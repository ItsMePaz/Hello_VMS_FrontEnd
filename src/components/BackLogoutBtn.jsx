import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/header.css";
import LogoutConfirmationModal from "../modals/LogoutConfirmationModal";

function BackLogoutBtn() {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  /* const handleLogout = () => {
    window.localStorage.clear();
    navigate("/Hello_VMS_FrontEnd/", { replace: true });
    console.log("You have been loggedout");
  }; */
  return (
    <div>
      {showLogout ? (
        <LogoutConfirmationModal setShowLogout={setShowLogout} />
      ) : null}
      <div>
        <button onClick={() => navigate(-1)}>
          <div className="back-logout-btn back-placement tw-z-[1019]">BACK</div>
        </button>
        <button
          className="back-logout-btn logout-placement tw-z-[1019]"
          onClick={() => {
            /* handleLogout(); */
            setShowLogout(true);
          }} /* to="/Hello_VMS_FrontEnd/" */
        >
          <p className="logout-btn">LOG OUT</p>
        </button>
        {/*   <Link to="/Hello_VMS_FrontEnd/">
        <div className="back-logout-btn logout-placement">LOG OUT</div>
      </Link> */}
      </div>
    </div>
  );
}

export default BackLogoutBtn;