import { Link } from "react-router-dom";
import "../styles/menu.css";
import "../styles/monitoringPage.css";

import PageHeader from "../components/PageHeader";
import PageTitle from "../components/PageTitle";
import BackLogoutBtn from "../components/BackLogoutBtn";
import AddVisitorBtn from "../components/AddVisitorBtn";
import WaveAnimation from "../components/WaveAnimation";
import ResultsByNameCell from "../components/ResultsByNameCell";
import ResultsByDateCell from "../components/ResultsByDateCell";
import ResultsByContactNumberCell from "../components/ResultsByContactNumberCell";
import ResultsByPurposeCell from "../components/ResultsByPurposeCell";
import ResultsByLastNameCell from "../components/ResultsByLastNameCell";
import ResultsByUniqueIdCell from "../components/ResultsByUniqueIdCell";
function VisitorDataBase({ user, setUser }) {
  return (
    <div>
      <PageHeader bgColor=" tw-bg-[#59e0f2]" />
      <br />
      <PageTitle title="VISITOR DATABASE" />
      <div className="tw-z-[2500] tw-overflow-auto tw-h-[50vh]">
        <ResultsByNameCell />
        <ResultsByLastNameCell />
        <ResultsByDateCell />
        <ResultsByContactNumberCell />
        <ResultsByPurposeCell />
        <ResultsByUniqueIdCell />
      </div>

      <BackLogoutBtn user={user} setUser={setUser} />
      <WaveAnimation />
    </div>
  );
}

export default VisitorDataBase;
