import React, { useState, useEffect } from "react";

import "../styles/ResultsModal.css";
import { useNavigate } from "react-router-dom";
import visitorService from "../services/visitorService";
import UnitListResult from "../components/UnitListResult";
function ShowResultsByUniqueIdModal({ setShow, firstName, id }) {
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

  const idGroups = {
    id: visitorList.filter((obj) => obj.id === id),
  };

  const idObject = idGroups.id;
  console.log(idObject);

  return (
    <div className="background-modal-results tw-z-[4000]">
      <div className="remove-user-modal-results ">
        <div className="tw-flex tw-justify-center">
          Showing Result with Id:{" "}
          <strong style={{ marginLeft: ".5rem" }}>{id}</strong>
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
              {idObject.map((anId) => (
                <UnitListResult
                  key={idObject._id}
                  anId={idObject}
                  lastName={anId.lastName}
                  firstName={anId.firstName}
                  timeVisited={anId.timeVisited}
                  timeExited={anId.timeExited}
                  purpose={anId.purposeOfEntry}
                  id={anId.id}
                  userId={anId.id}
                  dateVisited={anId.dateVisited}
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

export default ShowResultsByUniqueIdModal;
