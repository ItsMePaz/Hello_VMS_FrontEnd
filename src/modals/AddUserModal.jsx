import React, { useState } from "react";
import "../styles/addUserModal.css";
import "../styles/loginStyle.css";
import registerUserService from "../services/registerUserService";
import LoadingSpinner from "../components/LoadingSpinner";

function AddUserModal({ setShow, userList, setUserList }) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [adminToken, setAdminToken] = useState("");
  const [role, setRole] = useState("");
  const handleAddUser = (e) => {
    e.preventDefault();
    setLoading(true);
    /*     console.log(JSON.parse(window.localStorage.getItem("loggedUser")).token);
     */ setAdminToken(
      JSON.parse(window.localStorage.getItem("loggedUser")).token
    );

    setRole("user");

    const userObject = {
      name: name,
      username: username,
      password: password,
      role: role,
      adminToken: adminToken,
    };

    registerUserService
      .createUser(userObject)
      .then((returnedUser) => {
        console.log(returnedUser);
        setShow(null);
        /*         console.log(userObject.adminToken);
         */ setUserList(userList.concat(returnedUser));
        setName("");
        setUsername("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
        alert(
          `Are you sure you want to add ${name} with a username: ${username}, and password: ${password} as a System user? Click "ADD" again to confirm and "CANCEL" to cancel`
        );
      })
      .finally(() => setLoading(false));
  };
  if (loading) {
    return (
      <div className="tw-flex tw-flex-col tw-h-screen tw-items-center tw-justify-center">
        <LoadingSpinner loadingMessage="Confirming and Adding New User to the Database. Please Wait" />
      </div>
    );
  }
  return (
    <div className="background-modal tw-z-[1500] ">
      <div className="remove-user-modal ">
        ADD NEW USER
        <br />
        <form onSubmit={handleAddUser}>
          <div className="tw-flex tw-flex-col">
            <label>USERNAME</label>
            <input
              required
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
              required
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
              required
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
              /* onClick={() => {
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
