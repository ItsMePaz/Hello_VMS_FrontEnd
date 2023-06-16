import React from "react";
import "../src/app.css";
import "../styles/userManagementResp.css";
import { useState } from "react";

function RemoveUserModal({ userName }) {
  return (
    <div className="background-modal">
      <div className="remove-user-modal">
        Are you sure you want to remove<strong>{userName}</strong>as an admin?
        <br />
        <div className="modal-button-placement">
          <button
            className="modalButton"
            onClick={() => {
              console.log("NO");
            }}
          >
            NO
          </button>
          <button className="modalButton">YES</button>
        </div>
      </div>{" "}
    </div>
  );
}

export default RemoveUserModal;
