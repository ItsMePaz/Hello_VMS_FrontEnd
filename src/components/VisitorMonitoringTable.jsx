import React, { useState } from "react";
import UnitListVisitor from "./UnitListVisitor";
import { useEffect } from "react";
import visitorService from "../services/visitorService";
import "../styles/monitoringPage.css";

function VisitorMonitoringTable({ visitorList, setVisitorList }) {
  const [timeExited, setTimeExited] = useState("");
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

  return (
    <div className="reverse-monitoring">
      <table className="table-headings-placement ">
        <thead className="thead-monitoring">
          <tr>
            <td>VISITOR'S NAME</td>

            <td>PURPOSE OF ENTRY</td>
            <td>CONTACT NUMBER</td>
            <td>DATE VISITED</td>
            <td>TIME OF ENTRY</td>
            <td>TIME OF EXIT</td>
          </tr>
        </thead>
      </table>{" "}
      <div className="table-body-placement tw-overflow-auto tw-h-[250px]">
        <table>
          <tbody>
            {visitorList.map((aVisitor) => (
              <UnitListVisitor
                key={aVisitor.id}
                aVisitor={visitorList}
                visitorFirstName={aVisitor.firstName}
                visitorLastName={aVisitor.lastName}
                dateVisited={aVisitor.dateVisited}
                timeVisited={aVisitor.timeVisited}
                timeExited={aVisitor.timeExited}
                purpose={aVisitor.purposeOfEntry}
                contactNumber={aVisitor.contactNumber}
                userId={aVisitor.id}
                setTimeExited={setTimeExited}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VisitorMonitoringTable;
