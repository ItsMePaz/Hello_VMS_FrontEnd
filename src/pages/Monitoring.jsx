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

function Monitoring() {
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

      <div>
        <Link to="/Hello_VMS_FrontEnd/monitoring/time-in-visitor">
          <AddVisitorBtn purpose="ADD VISITOR" />
        </Link>
      </div>
    </div>
  );
}

export default Monitoring;
