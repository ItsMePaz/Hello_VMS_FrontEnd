import { Link } from "react-router-dom";
function VisitorDataBase() {
  return (
    <div>
      <h1>Visitor DataBase</h1>
      <p>
        <Link to="/menu">Back</Link>
      </p>
      <div>
        <Link to="/LogIn">Log-out</Link>
      </div>
    </div>
  );
}

export default VisitorDataBase;
