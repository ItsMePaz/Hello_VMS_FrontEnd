import React from "react";
import "../app.css";
import "../styles/userManagementResp.css";
import { useNavigate } from "react-router-dom";

function LogoutConfirmationModal({ setShowLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/Hello_VMS_FrontEnd/", { replace: true });
    console.log("You have been loggedout");
  };

  return (
    <div className="background-modal tw-z-[1020]">
      <div className="remove-user-modal ">
        Are you sure you want to Logout?
        <br />
        <div className="modal-button-placement ">
          <button className="modalButton" onClick={() => setShowLogout(null)}>
            NO
          </button>
          <button
            className="modalButton"
            onClick={() => {
              setShowLogout(null);
              handleLogout();
            }}
          >
            YES
          </button>
        </div>
      </div>{" "}
    </div>
  );
}

export default LogoutConfirmationModal;
