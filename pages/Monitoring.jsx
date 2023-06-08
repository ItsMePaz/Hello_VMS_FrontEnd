import { Link } from "react-router-dom";
function Monitoring() {
  return (
    <div>
      <h1>Monitoring</h1>
      <p>
        <Link to="/Hello_VMS_FrontEnd/menu">Back</Link>
      </p>
      <div>
        <Link to="/Hello_VMS_FrontEnd/monitoring/time-in-visitor">
          Time-in Visitor
        </Link>
      </div>
      <div>
        <Link to="/Hello_VMS_FrontEnd/">Log-out</Link>
      </div>
    </div>
  );
}

export default Monitoring;
