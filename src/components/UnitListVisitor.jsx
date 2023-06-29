import React from "react";
import visitorService from "../services/visitorService";
import "../styles/monitoringPage.css";

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
  const handleTimeExit = () => {
    visitorService
      .exitVisitor(visitorId)
      .then(() => {
        const updatedVisitors = visitorList.map((visitor) => {
          if (visitor.id === visitorId) {
            return {
              ...visitor,
              timeExited: new Date().toLocaleTimeString(),
            };
          }
          return visitor;
        });
        setVisitorList(updatedVisitors);
      })
      .catch((error) => {
        console.error("Error updating visitor's data:", error);
      });
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
        {timeExited ? (
          timeExited
        ) : (
          <button
            className="tw-py-2 tw-px-4 tw-bg-green-500 tw-text-white tw-rounded-lg  tw-hover:bg-green-700 tw-focus:outline-none tw-h-[5vh] tw-text-[9px] tw-mt-[.5vh] tw-align-middle xl:tw-m-[1vh]"
            onClick={handleTimeExit}
          >
            CLICK TO TIME OUT
          </button>
        )}
      </td>
    </tr>
  );
}

export default UnitListVisitor;
