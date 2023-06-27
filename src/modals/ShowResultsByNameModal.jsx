import React, { useState, useEffect } from "react";

import "../styles/ResultsModal.css";
import { useNavigate } from "react-router-dom";
import visitorService from "../services/visitorService";
import UnitListResult from "../components/UnitListResult";
function ShowResultsByNameModal({ setShow, firstName, lastName }) {
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

  const firstNameGroups = {
    firstName: visitorList.filter((obj) => obj.firstName === firstName),
  };

  const firstNameObject = firstNameGroups.firstName;
  console.log(firstNameObject);

  return (
    <div className="background-modal-results tw-z-[4000]">
      <div className="remove-user-modal-results ">
        <div className="modal-title tw-flex tw-justify-center">
          Showing Results with first name:{" "}
          <strong style={{ marginLeft: ".5rem" }}>{firstName}</strong>
        </div>
        <br />
        <div className="reverse">
          <table className="table-body-placement tw-overflow-auto tw-overflow-x-auto">
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
                {firstNameObject.map((aFirstName) => (
                  <UnitListResult
                    key={firstNameObject._id}
                    aFirstName={firstNameObject}
                    firstName={aFirstName.firstName}
                    lastName={aFirstName.lastName}
                    timeVisited={aFirstName.timeVisited}
                    timeExited={aFirstName.timeExited}
                    purpose={aFirstName.purposeOfEntry}
                    contactNumber={aFirstName.contactNumber}
                    userId={aFirstName.id}
                    dateVisited={aFirstName.dateVisited}
                  />
                ))}
              </tbody>
            </table>
          </div>
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

export default ShowResultsByNameModal;
