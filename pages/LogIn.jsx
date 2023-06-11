import { Link } from "react-router-dom";
function LogIn() {
  return (
    <div>
      <Link to="/Hello_VMS_FrontEnd/menu">User LogIn</Link>
      <br />
      <Link to="/Hello_VMS_FrontEnd/user_management">Admin LogIn</Link>
    </div>
  );
}

export default LogIn;
