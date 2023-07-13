import React from "react";
import "../App.css";
import "../styles/userManagementResp.css";
import registerUserService from "../services/registerUserService";
import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
function RemoveUserModal({
  userName,
  setShow,
  user_id,
  userList,
  setUserList,
  key,
}) {
  const [loading, setLoading] = useState(false);

  const [adminToken, setAdminToken] = useState("");

  /*   */
  const handleDeleteButton = (e) => {
    e.preventDefault();
    setLoading(true);
    setAdminToken(JSON.parse(window.localStorage.getItem("loggedUser")).token);
    const deleteUserObject = {
      id: user_id,
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
        alert(`Successfully Removed. Page will now Refresh `);
        window.location.reload();
      })
      .finally(() => {
        setLoading(false);
        window.location.reload();
      });
  };

  if (loading) {
    return (
      <div className="tw-flex tw-flex-col tw-h-screen tw-items-center tw-justify-center">
        <LoadingSpinner loadingMessage="Removing User from the Database. Please Wait" />
      </div>
    );
  }
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
