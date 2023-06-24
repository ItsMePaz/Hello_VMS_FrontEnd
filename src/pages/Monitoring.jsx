import { Link } from "react-router-dom";
import "../styles/menu.css";
import "../styles/monitoringPage.css";
import PageHeader from "../components/PageHeader";
import BackLogoutBtn from "../components/BackLogoutBtn";
import PageTitle from "../components/PageTitle";
import AddVisitorBtn from "../components/AddVisitorBtn";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import VisitorMonitoringTable from "../components/VisitorMonitoringTable";
function Monitoring({ visitorList, setVisitorList }) {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  /*  useEffect(() => {
    if (window.localStorage.length === 0)
      navigate("/Hello_VMS_FrontEnd/", { replace: true });
  }, [user, navigate]);
 */
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  return (
    <div>
      <PageHeader bgColor=" tw-bg-[#FACF36]" />
      <BackLogoutBtn user={user} setUser={setUser} />
      <PageTitle title="MONITORING" />

      <VisitorMonitoringTable
        visitorList={visitorList}
        setVisitorList={setVisitorList}
      />

      <div>
        <AddVisitorBtn
          purpose="ADD VISITOR"
          visitorList={visitorList}
          setVisitorList={setVisitorList}
        />
      </div>
    </div>
  );
}

export default Monitoring;
