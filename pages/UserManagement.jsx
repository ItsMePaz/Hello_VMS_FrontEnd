import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PageTitle from "../components/PageTitle";
import InputCell from "../components/InputCell";
import "../styles/header.css";

function UserManagement() {
  return (
    <div>
      <PageHeader bgColor=" tw-bg-white" />
      <PageTitle title="USER MANAGEMENT" />
      <div className="back-drop"></div>
      <InputCell />
      <Link to="/Hello_VMS_FrontEnd/">
        <div className="back-logout-btn logout-placement">LOG OUT</div>
      </Link>
    </div>
  );
}

export default UserManagement;
