import React from "react";
import UnitListVisitor from "./UnitListVisitor";
import { useEffect } from "react";
import visitorService from "../services/visitorService";

function VisitorMonitoringTable({ visitorList, setVisitorList }) {
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
    <div>
      <table className="table-headings-placement">
        <thead>
          <tr>
            <td>VISITOR'S NAME</td>
            <td>TIME OF ENTRY</td>
            <td>TIME OF EXIT</td>
            <td>PURPOSE OF ENTRY</td>
            <td>CONTACT NUMBER</td>
          </tr>
        </thead>
      </table>{" "}
      <div className="table-body-placement tw-overflow-auto">
        <table>
          <tbody>
            {/*    <tr>
              <td>{visitorName}</td>
              <td>{timeOfEntry}</td>
              <td>{timeOfExit}</td>
              <td>{purposeOfEntry}</td>
              <td>{idReturnNumber}</td>
            </tr> */}
            <tr>
              <td>Michael Andrew</td>
              <td>6 : 20 AM</td>
              <td>6 : 30 PM</td>
              <td>Enrollment</td>
              <td>27</td>
            </tr>
            {visitorList.map((aVisitor) => (
              <UnitListVisitor
                key={visitorList._id}
                aVisitor={visitorList}
                visitorFirstName={aVisitor.firstName}
                visitorLastName={aVisitor.lastName}
                timeVisited={aVisitor.timeVisited}
                timeExited={aVisitor.timeExited}
                purpose={aVisitor.purposeOfEntry}
                contactNumber={aVisitor.contactNumber}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VisitorMonitoringTable;
