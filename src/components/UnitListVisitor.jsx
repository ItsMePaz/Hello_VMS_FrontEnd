import React from "react";
import visitorService from "../services/visitorService";
import ExitModal from "../modals/ExitModal";
import { useState } from "react";

function UnitListVisitor({
  visitorId,
  visitorFirstName,
  visitorLastName,
  timeVisited,
  timeExited,
  purpose,
  contactNumber,
  dateVisited,
  setVisitorList,
  visitorList,
}) {
  // const handleTimeExit = () => {
  //   visitorService
  //     .exitVisitor(visitorId)
  //     .then(() => {
  //       const updatedVisitors = visitorList.map((visitor) => {
  //         if (visitor.id === visitorId) {
  //           return {
  //             ...visitor,
  //             timeExited: new Date().toLocaleTimeString(),
  //           };
  //         }
  //         return visitor;
  //       });
  //       setVisitorList(updatedVisitors);
  //     })
  //     .catch((error) => {
  //       console.error("Error updating visitor's data:", error);
  //     });
  // };
  const [isOpen, setIsOpen] = useState(false);
  const [newDate, setNewDate] = useState("");
  const [isExitConfirmed, setIsExitConfirmed] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleTimeExit = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString();
    setNewDate(formattedDate);
    console.log("Success");
    setIsExitConfirmed(true);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <tr>
      <td>
        {visitorFirstName} {visitorLastName}
      </td>
      <td>{purpose}</td>
      <td>{contactNumber}</td>
      <td>{dateVisited}</td>
      <td>{timeVisited}</td>
      <td>
        {isExitConfirmed ? (
          <div>{newDate}</div>
        ) : (
          <>
            <div>{newDate}</div>
            <button onClick={toggleModal} disabled={isExitConfirmed}>
              CLICK
            </button>
          </>
        )}

        {isOpen && (
          <ExitModal
            toggleModal={toggleModal}
            setNewDate={setNewDate}
            handleTimeExit={handleTimeExit}
            handleCancel={handleCancel}
          />
        )}
      </td>
    </tr>
  );
}

export default UnitListVisitor;
