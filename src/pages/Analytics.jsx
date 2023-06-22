import PageHeader from "../components/PageHeader";
import PageTitle from "../components/PageTitle";
import BackLogoutBtn from "../components/BackLogoutBtn";
import WaveAnimation from "../components/WaveAnimation";
function Analytics({ user, setUser }) {
  return (
    <div>
      <PageHeader bgColor=" tw-bg-[#FE54D9]" />
      <br />
      <PageTitle title="ANALYTICS" />
      <BackLogoutBtn user={user} setUser={setUser} />
      <WaveAnimation />
    </div>
  );
}

export default Analytics;
