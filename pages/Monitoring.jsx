import { Link } from "react-router-dom";
import "../styles/menu.css";
import "../styles/monitoringPage.css";
import PageHeader from "../components/PageHeader";
import BackLogoutBtn from "../components/BackLogoutBtn";
import PageTitle from "../components/PageTitle";
import AddVisitorBtn from "../components/AddVisitorBtn";

function Monitoring() {
  return (
    <div>
      <PageHeader bgColor=" tw-bg-[#FACF36]" />
      <BackLogoutBtn />
      <PageTitle title="MONITORING" />
      <AddVisitorBtn />
      <p>
        <Link to="/Hello_VMS_FrontEnd/menu">Back</Link>
      </p>
      <div>
        <Link to="/Hello_VMS_FrontEnd/monitoring/time-in-visitor">
          Time-in Visitor
        </Link>
      </div>
      <div>
        <Link to="/Hello_VMS_FrontEnd/">Log-out</Link>
      </div>
    </div>
  );
}

export default Monitoring;
