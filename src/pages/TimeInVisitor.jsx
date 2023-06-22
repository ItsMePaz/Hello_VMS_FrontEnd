import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PageTitle from "../components/PageTitle";
import BackLogoutBtn from "../components/BackLogoutBtn";
/* this component is to be removed */
function TimeInVisitor() {
  return (
    <div>
      <PageHeader bgColor=" tw-bg-[#FACF36]" />
      <br />
      <PageTitle title="TIME IN VISITOR" />
      <BackLogoutBtn />
    </div>
  );
}

export default TimeInVisitor;
