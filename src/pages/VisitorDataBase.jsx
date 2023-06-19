import { Link } from "react-router-dom";
import "../styles/menu.css";
import "../styles/monitoringPage.css";
import PageHeader from "../components/PageHeader";
import PageTitle from "../components/PageTitle";
import BackLogoutBtn from "../components/BackLogoutBtn";
import AddVisitorBtn from "../components/AddVisitorBtn";

function VisitorDataBase() {
  return (
    <div>
      <PageHeader bgColor=" tw-bg-[#59e0f2]" />
      <br />
      <PageTitle title="VISITOR DATABASE" />
      <div>
        <Link to="/Hello_VMS_FrontEnd/menu/visitor_database/database_results">
          <AddVisitorBtn purpose="DISPLAY RESULTS" />
        </Link>
      </div>
      <BackLogoutBtn />
    </div>
  );
}

export default VisitorDataBase;
