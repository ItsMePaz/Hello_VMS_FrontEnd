import React from "react";

import "../styles/ResultsModal.css";
import { useNavigate } from "react-router-dom";

function ShowResultsByNameModal({ setShow }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/Hello_VMS_FrontEnd/", { replace: true });
    console.log("You have been loggedout");
  };

  return (
    <div className="background-modal-results tw-z-[1020]">
      <div className="remove-user-modal-results ">
        Are you sure you want to Logout?
        <br />
        <div className="modal-button-placement-results ">
          <button className="modalButton" onClick={() => setShow(null)}>
            CLOSE
          </button>
          {/*  <button
            className="modalButton"
            onClick={() => {
              setShow(null);
              handleLogout();
            }}
          >
            YES
          </button> */}
        </div>
      </div>{" "}
    </div>
  );
}

export default ShowResultsByNameModal;
