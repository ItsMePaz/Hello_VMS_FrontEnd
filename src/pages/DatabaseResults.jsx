import PageHeader from "../components/PageHeader";
import PageTitle from "../components/PageTitle";
import BackLogoutBtn from "../components/BackLogoutBtn";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DatabaseResults() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/Hello_VMS_FrontEnd/");
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
      <PageHeader bgColor=" tw-bg-[#59e0f2]" />
      <br />
      <PageTitle title="DATABASE RESULTS" />
      <BackLogoutBtn />
    </div>
  );
}

export default DatabaseResults;
