import React, { useState } from "react";
import "../styles/addUserModal.css";
import "../styles/loginStyle.css";
import registerUserService from "../services/registerUserService";
import visitorService from "../services/visitorService";
function AddVisitorModal({ setShow, visitorList, setVisitorList }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleAddVisitor = (e) => {
    e.preventDefault();

    const visitorObject = {
      firstName: firstName,
      lastName: lastName,
      purpose: purpose,
      contactNumber: contactNumber,
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
      .catch((error) => console.log(error));
  };
  return (
    <div className="background-modal tw-z-[1500] ">
      <div className="remove-user-modal ">
        ADD NEW VISITOR
        <br />
        <form onSubmit={handleAddVisitor}>
          <div className="tw-flex tw-flex-col">
            <label>FRIST NAME</label>
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
            <input
              type="text"
              name="purpose"
              value={purpose}
              className="tw-border-solid tw-border-2 tw-border-slate-500 tw-p-2"
              onChange={(e) => setPurpose(e.target.value)}
            />
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
