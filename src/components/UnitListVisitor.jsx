import React, { useState } from "react";
import { useEffect } from "react";

function UnitListVisitor({
  visitorFirstName,
  visitorLastName,
  timeVisited,
  timeExited,
  purpose,
  contactNumber /* This should be a returned ID number but consider changing it to Contact number */,
  userId,
  setTimeExited,
}) {
  const handleTimeExit = () => {
    console.log(userId);
    setTimeExited("asdas");
  };
  return (
    <tr>
      <td>
        {visitorFirstName} {visitorLastName}
      </td>
      <td>{timeVisited}</td>
      <td>
        {timeExited}
        {!timeExited ? (
          <button
            className="tw-py-2 tw-px-4 tw-bg-green-500 tw-text-white tw-rounded-lg  tw-hover:bg-green-700 tw-focus:outline-none  "
            onClick={handleTimeExit}
          >
            CLICK TO TIME OUT
          </button>
        ) : null}
      </td>
      <td>{purpose}</td>
      <td>{contactNumber}</td>
    </tr>
  );
}

export default UnitListVisitor;
