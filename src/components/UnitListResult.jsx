import React from "react";

function UnitListResult({
  firstName,
  lastName,
  timeVisited,
  timeExited,
  purpose,
  contactNumber,
  userId,
  dateVisited,
}) {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{dateVisited}</td>
      <td>{contactNumber}</td> <td>{purpose}</td>
      <td>{timeVisited}</td>
      <td>{timeExited}</td>
      <td>{userId}</td>
    </tr>
  );
}

export default UnitListResult;
