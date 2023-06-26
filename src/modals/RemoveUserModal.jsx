import React from "react";
import "../app.css";
import "../styles/userManagementResp.css";
import registerUserService from "../services/registerUserService";
import { useState } from "react";
function RemoveUserModal({
  userName,
  setShow,
  user_id,
  userList,
  setUserList,
  key,
}) {
  const [adminToken, setAdminToken] = useState("");

  /*   */
  const handleDeleteButton = (e) => {
    e.preventDefault();
    setAdminToken(JSON.parse(window.localStorage.getItem("loggedUser")).token);
    const deleteUserObject = {
      id: key,
      adminToken: adminToken,
    };
    console.log(deleteUserObject);
    registerUserService
      .deleteUser(deleteUserObject)
      .then((_res) => {
        /* setShow(null); */
        setUserList(userList.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.log(error);
        alert("Successfully Removed. Page will now Refresh");
        window.location.reload();
      });
  };
  return (
    <div className="background-modal tw-z-[1020] ">
      <div className="remove-user-modal ">
        Are you sure you want to remove<strong>{userName}</strong>as an admin?
        <br />
        <div className="modal-button-placement ">
          <button className="modalButton" onClick={() => setShow(null)}>
            NO
          </button>
          <button className="modalButton" onClick={handleDeleteButton}>
            YES
          </button>
        </div>
      </div>{" "}
    </div>
  );
}

export default RemoveUserModal;
