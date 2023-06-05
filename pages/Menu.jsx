import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <div>Menu</div>
      <div>
        <Link to="/Hello_VMS_FrontEnd/menu/visitor_database">
          Visitors DataBase
        </Link>
      </div>
      <div>
        <Link to="/Hello_VMS_FrontEnd/menu/monitoring">Monitoring Mode</Link>
      </div>
      <div>
        <Link to="/Hello_VMS_FrontEnd/menu/analytics">Analytics</Link>
      </div>
      <div>
        <p>
          <Link to="/Hello_VMS_FrontEnd/">Log-out</Link>
        </p>
      </div>
    </>
  );
}

export default Menu;
