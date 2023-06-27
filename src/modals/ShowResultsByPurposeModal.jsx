import React, { useState, useEffect } from "react";

import "../styles/ResultsModal.css";
import { useNavigate } from "react-router-dom";
import visitorService from "../services/visitorService";
import UnitListResult from "../components/UnitListResult";
function ShowResultsByPurposeModal({ setShow, firstName, purposeOfEntry }) {
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

  const purposeOfEntryGroups = {
    purposeOfEntry: visitorList.filter(
      (obj) => obj.purposeOfEntry === purposeOfEntry
    ),
  };

  const purposeOfEntryObject = purposeOfEntryGroups.purposeOfEntry;
  console.log(purposeOfEntryObject);

  return (
    <div className="background-modal-results tw-z-[4000]">
      <div className="remove-user-modal-results ">
        <div className="modal-title tw-flex tw-justify-center">
          Showing Results with the purpose:{" "}
          <strong style={{ marginLeft: ".5rem" }}>{purposeOfEntry}</strong>
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
                {purposeOfEntryObject.map((aPurposeOfEntry) => (
                  <UnitListResult
                    key={purposeOfEntryObject._id}
                    aPurposeOfEntry={purposeOfEntryObject}
                    lastName={aPurposeOfEntry.lastName}
                    firstName={aPurposeOfEntry.firstName}
                    timeVisited={aPurposeOfEntry.timeVisited}
                    timeExited={aPurposeOfEntry.timeExited}
                    purpose={aPurposeOfEntry.purposeOfEntry}
                    contactNumber={aPurposeOfEntry.contactNumber}
                    userId={aPurposeOfEntry.id}
                    dateVisited={aPurposeOfEntry.dateVisited}
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

export default ShowResultsByPurposeModal;
