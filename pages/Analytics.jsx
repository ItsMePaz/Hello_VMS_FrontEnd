import { Link } from "react-router-dom";

function Analytics() {
  return (
    <div>
      <h1>Analytics</h1>
      <p>
        <Link to="/Hello_VMS_FrontEnd/menu">Back</Link>
      </p>
      <div>
        <Link to="/Hello_VMS_FrontEnd/">Log-out</Link>
      </div>
    </div>
  );
}

export default Analytics;
