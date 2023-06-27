import React, { useState, useEffect } from "react";

import "../styles/ResultsModal.css";
import { useNavigate } from "react-router-dom";
import visitorService from "../services/visitorService";
import UnitListResult from "../components/UnitListResult";
function ShowResultsDateModal({ setShow, firstName, lastName, dateVisited }) {
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

  const dateGroups = {
    dateVisited: visitorList.filter((obj) => obj.dateVisited === dateVisited),
  };

  const dateObject = dateGroups.dateVisited;
  console.log(dateObject);

  return (
    <div className="background-modal-results tw-z-[4000]">
      <div className="remove-user-modal-results ">
        <div className="modal-title tw-flex tw-justify-center">
          Showing Results with the date:{" "}
          <strong style={{ marginLeft: ".5rem" }}>{dateVisited}</strong>
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
                {dateObject.map((aDate) => (
                  <UnitListResult
                    key={dateObject._id}
                    aDate={dateObject}
                    lastName={aDate.lastName}
                    firstName={aDate.firstName}
                    timeVisited={aDate.timeVisited}
                    timeExited={aDate.timeExited}
                    dateVisited={aDate.dateVisited}
                    purpose={aDate.purposeOfEntry}
                    contactNumber={aDate.contactNumber}
                    userId={aDate.id}
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

export default ShowResultsDateModal;
