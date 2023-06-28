import PageHeader from "../components/PageHeader";
import PageTitle from "../components/PageTitle";
import BackLogoutBtn from "../components/BackLogoutBtn";
import WaveAnimation from "../components/WaveAnimation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PieChartModel from "../components/PieChartModel";
import PieChartModelLegends from "../components/PieChartModelLegends";
function Analytics() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.length === 0) navigate("/Hello_VMS_FrontEnd/");
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);
  return (
    <div>
      <PageHeader bgColor=" tw-bg-[#FE54D9]" />
      <br />
      <PageTitle title="ANALYTICS" />
      <br />
      <div className="tw-flex tw-justify-center tw-mt-[-7em]">
        <PieChartModelLegends />
        <PieChartModel />
      </div>

      <BackLogoutBtn />
      <WaveAnimation />
    </div>
  );
}

export default Analytics;
