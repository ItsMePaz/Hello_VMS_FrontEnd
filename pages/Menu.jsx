import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <div>Menu</div>
      <div>
        <Link to="/menu/visitor_database">Visitors DataBase</Link>
      </div>
      <div>
        <Link to="/menu/monitoring">Monitoring Mode</Link>
      </div>
      <div>
        <Link to="/menu/analytics">Analytics</Link>
      </div>
      <div>
        <p>
          <Link to="/LogIn">Log-out</Link>
        </p>
      </div>
    </>
  );
}

export default Menu;
