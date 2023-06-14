import PageHeader from "../components/PageHeader";
import PageTitle from "../components/PageTitle";
import BackLogoutBtn from "../components/BackLogoutBtn";

function VisitorDataBase() {
  return (
    <div>
      <PageHeader />
      <PageTitle title="VISITOR DATABASE" />
      <BackLogoutBtn location="/Hello_VMS_FrontEnd/menu" />
    </div>
  );
}

export default VisitorDataBase;
