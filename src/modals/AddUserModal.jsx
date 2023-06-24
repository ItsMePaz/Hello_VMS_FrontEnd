import React, { useState } from "react";
import "../styles/addUserModal.css";
import "../styles/loginStyle.css";
import registerUserService from "../services/registerUserService";
function AddUserModal({ setShow }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [adminToken, setAdminToken] = useState("");
  /*  const [systemUser, setSystemUser] = useState("");
  const [newSystemUser, setNewSystemUser] = useState("");
  const [systemUserName, setSystemUserName] = useState("");
  const [newSystemUserName, setNewSystemUserName] = useState("");
  const [systemUserPassword, setSystemUserPassword] = useState("");
  const [newSystemUserPassword, setNewSystemUserPassword] = useState("");

  const addUser = (e) => {
    e.preventDefault();

    const userObject = {
      username: setSystemUserName,
      name: setSystemUser,
      password: setSystemUserPassword,
    };
    userService
      .createUsers(userObject)
      .then((returnedUser, returnedUserName, returnedUserPassword) => {
        setSystemUser(systemUser.concat(returnedUser));
        setSystemUserName(systemUserName.concat(returnedUserName));
        setSystemUserPassword(systemUserPassword.concat(returnedUserPassword));
      })
      .catch((error) => console.log(error));
  }; */

  const handleAddUser = (e) => {
    e.preventDefault();
    /*     console.log(JSON.parse(window.localStorage.getItem("loggedUser")).token);
     */ setAdminToken(
      JSON.parse(window.localStorage.getItem("loggedUser")).token
    );
    registerUserService
      .registerUser({ name, username, password, adminToken })
      .then((_res) => {
        setShow(null);
        setName("");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="background-modal tw-z-[1500] ">
      <div className="remove-user-modal ">
        ADD NEW USER
        <br />
        <form onSubmit={handleAddUser}>
          <div className="tw-flex tw-flex-col">
            <label>USERNAME</label>
            <input
              type="text"
              name="username"
              value={username}
              className="tw-border-solid tw-border-2 tw-border-slate-500 tw-p-2"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="tw-flex tw-flex-col">
            <label>FULL NAME </label>
            <input
              type="text"
              name="name"
              value={name}
              className="tw-border-solid tw-border-2 tw-border-slate-500 tw-p-2"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="tw-flex tw-flex-col">
            <label>PASSWORD </label>
            <input
              type="password"
              name="password"
              value={password}
              className="tw-border-solid tw-border-2 tw-border-slate-500 tw-p-2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="modal-button-placement ">
            <button
              className="modalButton"
              onClick={() => {
                setShow(null);
              }}
            >
              CANCEL
            </button>
            <button
              className="modalButton tw-bg-black"
              /*  onClick={() => {
                setShow(null);
              }} */
              type="submit"
            >
              ADD
            </button>
          </div>
        </form>
      </div>{" "}
    </div>
  );
}

export default AddUserModal;
