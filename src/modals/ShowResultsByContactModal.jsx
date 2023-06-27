import React, { useState, useEffect } from "react";

import "../styles/ResultsModal.css";
import { useNavigate } from "react-router-dom";
import visitorService from "../services/visitorService";
import UnitListResult from "../components/UnitListResult";
function ShowResultsByContactModal({ setShow, firstName, contactNumber }) {
  const [visitorList, setVisitorList] = useState([]);

  useEffect(() => {
    visitorService
      .getVisitors()
      .then((res) => {
        setVisitorList(res);

        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const contactNumberGroups = {
    contactNumber: visitorList.filter(
      (obj) => obj.contactNumber === contactNumber
    ),
  };

  const contactNumberObject = contactNumberGroups.contactNumber;
  console.log(contactNumberObject);

  return (
    <div className="background-modal-results tw-z-[4000]">
      <div className="remove-user-modal-results ">
        <div className="tw-flex tw-justify-center">
          Showing Results with contact:{" "}
          <strong style={{ marginLeft: ".5rem" }}>{contactNumber}</strong>
        </div>
        <br />
        <table className="table-headings-placement">
          <thead>
            <tr>
              <td>FIRST NAME</td>
              <td>LAST NAME</td>
              <td>DATE VISITED</td>
              <td>CONTACT NUMBER</td>
              <td>PURPOSE OF ENTRY</td>
              <td>TIME OF ENTRY</td>
              <td>TIME OF EXIT</td>
              <td>UNIQUE ID</td>
            </tr>
          </thead>
        </table>{" "}
        <div className="table-body-placement tw-overflow-auto">
          <table>
            <tbody>
              {contactNumberObject.map((aContactNumber) => (
                <UnitListResult
                  key={contactNumberObject._id}
                  aContactNumber={contactNumberObject}
                  lastName={aContactNumber.lastName}
                  firstName={aContactNumber.firstName}
                  timeVisited={aContactNumber.timeVisited}
                  timeExited={aContactNumber.timeExited}
                  purpose={aContactNumber.purposeOfEntry}
                  contactNumber={aContactNumber.contactNumber}
                  userId={aContactNumber.id}
                  dateVisited={aContactNumber.dateVisited}
                />
              ))}
            </tbody>
          </table>
        </div>
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

export default ShowResultsByContactModal;
