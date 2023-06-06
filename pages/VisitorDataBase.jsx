import { Link } from "react-router-dom";

function VisitorDataBase() {
  return (
    <div>
      <h1>Visitor DataBase</h1>
      <p>
        <Link to="/Hello_VMS_FrontEnd/menu">Back</Link>
      </p>
      <div>
        <Link to="/Hello_VMS_FrontEnd/">Log-out</Link>
      </div>
    </div>
  );
}

export default VisitorDataBase;
