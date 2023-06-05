import { Link } from "react-router-dom";

function Analytics() {
  return (
    <div>
      <h1>Analytics</h1>
      <p>
        <Link to="/menu">Back</Link>
      </p>
      <div>
        <Link to="/LogIn">Log-out</Link>
      </div>
    </div>
  );
}

export default Analytics;
