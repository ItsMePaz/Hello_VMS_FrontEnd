import React, { useState } from "react";
import "../styles/addUserModal.css";
import "../styles/loginStyle.css";
import registerUserService from "../services/registerUserService";
import LoadingSpinner from "../components/LoadingSpinner";

function UpdateUserModal({
  setShowUpdateModal,
  name,
  username,
  password,
  userList,
  update_id,
}) {
  const [newUser, setNewUser] = useState({ name, username, update_id });

  const [loading, setLoading] = useState(false);
  const [newName, setNewName] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [adminToken, setAdminToken] = useState("");

  const handleUpdateName = (e) => {
    e.preventDefault();
    setAdminToken(JSON.parse(window.localStorage.getItem("loggedUser")).token);
    const nameObject = {
      name: newName,
      id: update_id,
      adminToken: adminToken,
    };
    registerUserService
      .updateUser(nameObject)
      .then((returnedNewName) => {
        console.log(returnedNewName);
        alert("Name was succesfully updated. Page will now refresh.");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert(
          `Are you sure to vhange this User's name from "${name}" to "${newName}"? If so, please click "UPDATE NAME" again`
        );
      });
    console.log(newName);
  };

  const handleUpdateUsername = (e) => {
    e.preventDefault();
    setAdminToken(JSON.parse(window.localStorage.getItem("loggedUser")).token);
    const userNameObject = {
      username: newUsername,
      id: update_id,
      adminToken: adminToken,
    };
    registerUserService
      .updateUser(userNameObject)
      .then((returnedNewUserName) => {
        console.log(returnedNewUserName);
        alert("Username was succesfully updated. Page will now refresh.");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert(
          `Are you sure to change this User's username from "${username}" to "${newUsername}"? If so, please click "UPDATE USERNAME" again`
        );
      });
    console.log(newUsername);
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    setAdminToken(JSON.parse(window.localStorage.getItem("loggedUser")).token);
    const passwordObject = {
      password: newPassword,
      id: update_id,
      adminToken: adminToken,
    };
    registerUserService
      .updateUser(passwordObject)
      .then((returnedNewPassword) => {
        console.log(returnedNewPassword);
        alert("Password was succesfully changed. Page will now refresh.");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert(
          `Are you sure to change this User's password to "${newPassword}"? If so, please click "UPDATE PASSWORD" again`
        );
      });
    console.log(newPassword);
  };

  if (loading) {
    return (
      <div className="tw-flex tw-flex-col tw-h-screen tw-items-center tw-justify-center">
        <LoadingSpinner loadingMessage="Confirming and Updating User to the Database. Please Wait" />
      </div>
    );
  }
  return (
    <div className="background-modal tw-z-[1500] ">
      <div className="remove-user-modal tw-mt-[70%] tw-h-[80%] sm:tw-max-w-[60vh]  md:tw-mt-[30%] md:tw-h-[55%]  min-[785px]:tw-h-[65%] min-[540px]:tw-mt-[45%] xl:tw-mt-[28%] xl:tw-h-[80%] min-[1125px]:tw-mt-[40%] min-[1125px]:tw-h-[80%]  ">
        <div className="tw-mb-[-10%]">
          UPDATE <strong>{username}</strong>
        </div>
        <br />
        <form onSubmit={handleUpdateUsername}>
          <div className="tw-flex tw-flex-col">
            <label>USERNAME:</label>
            <input
              type="text"
              name="username"
              value={newUsername}
              className="tw-border-solid tw-border-2 tw-border-slate-500 tw-p-2"
              onChange={(e) => {
                setNewUsername(e.target.value);
              }}
              required
              placeholder="Enter new username here"
            />
          </div>
          {/* NAME */}
          <div className="modal-button-placement ">
            <button
              className="modalButton tw-bg-black tw-w-[10em]"
              /*  onClick={() => {
                setShow(null);
              }} */
              onClick={() => {
                console.log(newUsername);
              }}
              type="submit"
            >
              UPDATE USERNAME
            </button>
          </div>
        </form>
        <form onSubmit={handleUpdateName}>
          <div className="tw-flex tw-flex-col">
            <label>NAME:</label>
            <input
              type="text"
              name="name"
              value={newName}
              className="tw-border-solid tw-border-2 tw-border-slate-500 tw-p-2"
              onChange={(e) => {
                setNewName(e.target.value);
              }}
              required
              placeholder="Enter new name here"
            />
          </div>
          {/* PASSWORD */}
          <div className="modal-button-placement ">
            <button
              className="modalButton tw-bg-black tw-w-[10em]"
              /*  onClick={() => {
                setShow(null);
              }} */
              onClick={() => {
                console.log(newUser);
              }}
              type="submit"
            >
              UPDATE NAME
            </button>
          </div>
        </form>
        <form onSubmit={handleUpdatePassword}>
          <div className="tw-flex tw-flex-col">
            <label>PASSWORD</label>
            <input
              type="password"
              name="password"
              value={newPassword}
              className="tw-border-solid tw-border-2 tw-border-slate-500 tw-p-2"
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              placeholder="Enter new password here"
              required
            />
          </div>

          <div className="modal-button-placement ">
            <button
              className="modalButton tw-bg-black tw-w-[10em]"
              /*  onClick={() => {
                setShow(null);
              }} */
              onClick={() => {
                console.log(newUser);
              }}
              type="submit"
            >
              UPDATE PASSWORD
            </button>
          </div>
          <div className="tw-flex tw-justify-center">
            {" "}
            <button
              className="modalButton tw-mt-[8%] "
              onClick={() => setShowUpdateModal(false)}
            >
              CLOSE
            </button>
          </div>
        </form>
      </div>{" "}
    </div>
  );
}

export default UpdateUserModal;
