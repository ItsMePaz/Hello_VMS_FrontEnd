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

  const lastNameGroups = {
    lastName: visitorList.filter((obj) => obj.lastName === lastName),
  };

  const lastNameObject = lastNameGroups.lastName;
  console.log(lastNameObject);

  return (
    <div className="background-modal-results tw-z-[1020]">
      <div className="remove-user-modal-results ">
        <div className="tw-flex tw-justify-center">
          Showing Results with last name{" "}
          <strong style={{ marginLeft: ".5rem" }}>{lastName}</strong>
        </div>
        <br />
        <table className="table-headings-placement">
          <thead>
            <tr>
              <td>FIRST NAME</td>
              <td>LAST NAME</td>
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
              {lastNameObject.map((aLastName) => (
                <UnitListResult
                  key={lastNameObject._id}
                  aLastName={lastNameObject}
                  lastName={aLastName.lastName}
                  firstName={aLastName.firstName}
                  timeVisited={aLastName.timeVisited}
                  timeExited={aLastName.timeExited}
                  purpose={aLastName.purposeOfEntry}
                  contactNumber={aLastName.contactNumber}
                  userId={aLastName.id}
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

export default ShowResultsByNameModal;
