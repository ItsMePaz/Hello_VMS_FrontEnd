import React, { useEffect, useState } from "react";
import "../styles/addUserModal.css";
import "../styles/loginStyle.css";
import registerUserService from "../services/registerUserService";
import visitorService from "../services/visitorService";
import LoadingSpinner from "../components/LoadingSpinner";

function AddVisitorModal({ setShow, visitorList, setVisitorList }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [userToken, setUserToken] = useState("");
  const [loading, setLoading] = useState(false);
  const handleAddVisitor = (e) => {
    e.preventDefault();
    setLoading(true);
    setUserToken(JSON.parse(window.localStorage.getItem("loggedUser")).token);

    /* console.log(userToken); */
    const visitorObject = {
      firstName: firstName,
      lastName: lastName,
      purposeOfEntry: purpose,
      contactNumber: contactNumber,
      userToken: userToken,
    };
    visitorService
      .createVisitor(visitorObject)
      .then((returnedVisitor) => {
        setShow(null);

        setVisitorList(visitorList.concat(returnedVisitor));
        setFirstName("");
        setLastName("");
        setPurpose("");
        setContactNumber("");
      })
      .catch((error) => {
        console.log(error);

        alert(`Please click "ADD" button again`);
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <div className="tw-flex tw-flex-col tw-h-screen tw-items-center tw-justify-center">
        <LoadingSpinner loadingMessage="Adding Visitor data to the database..." />
      </div>
    );
  }
  return (
    <div className="background-modal tw-z-[1500] ">
      <div className="remove-user-modal tw-h-[60vh]">
        {/*  */}
        ADD NEW VISITOR
        <br />
        <form onSubmit={handleAddVisitor}>
          <div className="tw-flex tw-flex-col">
            <label>FIRST NAME</label>
            <input
              type="text"
              name="firstname"
              value={firstName}
              className="tw-border-solid tw-border-2 tw-border-slate-500 tw-p-2"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="tw-flex tw-flex-col">
            <label>LAST NAME </label>
            <input
              type="text"
              name="name"
              value={lastName}
              className="tw-border-solid tw-border-2 tw-border-slate-500 tw-p-2"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="tw-flex tw-flex-col">
            <label>PURPOSE </label>
            <select
              name="purpose"
              id="purposeList"
              value={purpose}
              className="tw-border-solid tw-border-2 tw-border-slate-500 tw-p-2"
              onChange={(e) => setPurpose(e.target.value)}
            >
              <option selected> Choose Purpose</option>
              <option value="Enrollment"> Enrollment</option>
              <option value="Interview">Interview</option>
              <option value="School Event">School Event</option>
              <option value="Registrar">Registrar</option>
              <option value="Parent & Teacher Meeting">
                Parent & Teacher Meeting
              </option>
            </select>
            {/*    <input
              type="text"
              name="purpose"
              value={purpose}
              className="tw-border-solid tw-border-2 tw-border-slate-500 tw-p-2"
              onChange={(e) => setPurpose(e.target.value)}
            /> */}
          </div>
          <div className="tw-flex tw-flex-col">
            <label>CONTACT NUMBER </label>
            <input
              type="text"
              name="contact"
              value={contactNumber}
              className="tw-border-solid tw-border-2 tw-border-slate-500 tw-p-2"
              onChange={(e) => setContactNumber(e.target.value)}
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
              name="submitButton"
            >
              ADD
            </button>
          </div>
        </form>
      </div>{" "}
    </div>
  );
}

export default AddVisitorModal;
