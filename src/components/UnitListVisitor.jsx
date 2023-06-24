import React from "react";

function UnitListVisitor({
  visitorFirstName,
  visitorLastName,
  timeVisited,
  timeExited,
  purpose,
  contactNumber /* This should be a returned ID number but consider changing it to Contact number */,
}) {
  return (
    <tr>
      <td>
        {visitorFirstName} {visitorLastName}
      </td>
      <td>{timeVisited}</td>
      <td>{timeExited}</td>
      <td>{purpose}</td>
      <td>{contactNumber}</td>
    </tr>
  );
}

export default UnitListVisitor;
