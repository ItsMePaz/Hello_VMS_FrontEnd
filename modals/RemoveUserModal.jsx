import React from "react";
import "../src/app.css";
import "../styles/userManagementResp.css";

function RemoveUserModal({ userName }) {
  return (
    <div className="background-modal">
      <div className="remove-user-modal">
        Are you sure you want to remove<strong>{userName}</strong>as a user?
        <br />
        <div className="modal-button-placement">
          <button className="modalButton">NO</button>
          <button className="modalButton">YES</button>
        </div>
      </div>{" "}
    </div>
  );
}

export default RemoveUserModal;
