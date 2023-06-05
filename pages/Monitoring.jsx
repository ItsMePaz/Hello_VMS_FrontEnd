import { Link } from "react-router-dom";
function Monitoring() {
  return (
    <div>
      <h1>Monitoring</h1>
      <p>
        <Link to="/menu">Back</Link>
      </p>
      <div>
        <Link to="/LogIn">Log-out</Link>
      </div>
    </div>
  );
}

export default Monitoring;
