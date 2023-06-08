import { Link } from "react-router-dom";

function TimeInVisitor() {
  return (
    <div>
      <h1>Time In Visitor</h1>
      <p>
        <Link to="/Hello_VMS_FrontEnd/menu/monitoring">Back</Link>
      </p>
      <div>
        <Link to="/Hello_VMS_FrontEnd/">Log-out</Link>
      </div>
    </div>
  );
}

export default TimeInVisitor;
