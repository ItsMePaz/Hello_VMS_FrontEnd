import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import visitorService from "./services/visitorService";
import Menu from "./pages/Menu";
import LogIn from "./pages/LogIn";
import VisitorDataBase from "./pages/VisitorDataBase";
import Monitoring from "./pages/Monitoring";
import Analytics from "./pages/Analytics";
import TimeInVisitor from "./pages/TimeInVisitor";
import UserManagement from "./pages/UserManagement";
import DatabaseResults from "./pages/DatabaseResults";
import LandingPage from "./pages/LandingPage";
import LoginAdmin from "./pages/LoginAdmin";
import { useEffect } from "react";
function App() {
  const [userList, setUserList] = useState([]);
  const [visitorList, setVisitorList] = useState([]);
  useEffect(() => {
    visitorService
      .getVisitors()
      .then((res) => {
        setVisitorList(res);

        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  /*  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null); */
  return (
    <Routes>
      <Route path="/Hello_VMS_FrontEnd/" element={<LandingPage />} />

      <Route
        path="/Hello_VMS_FrontEnd/login_user"
        element={
          <LogIn
          /* loading={loading}
            setLoading={setLoading}
            username={username}
            setUsername={setUsername}
            user={user}
            setUser={setUser}
            password={password}
            setPassword={setPassword} */
          />
        }
      />
      <Route path="/Hello_VMS_FrontEnd/login_admin" element={<LoginAdmin />} />

      <Route
        path="/Hello_VMS_FrontEnd/menu"
        /* component={() => (
          <Menu
            authorizedUser={authorizedUser}
            setAuthorizedUser={setAuthorizedUser}
          />
        )} */
        element={
          <Menu
          /* user={user} setUser={setUser} */
          />
        }
      />
      <Route
        path="/Hello_VMS_FrontEnd/user_management"
        element={
          <UserManagement userList={userList} setUserList={setUserList} />
        }
      />
      <Route
        path="/Hello_VMS_FrontEnd/menu/visitor_database"
        element={<VisitorDataBase /* user={user} setUser={setUser} */ />}
      />
      <Route
        path="/Hello_VMS_FrontEnd/menu/monitoring"
        element={
          <Monitoring
            visitorList={visitorList}
            setVisitorList={setVisitorList} /* user={user} setUser={setUser} */
          />
        }
      />
      <Route
        path="/Hello_VMS_FrontEnd/monitoring/time-in-visitor"
        element={<TimeInVisitor />}
      />
      <Route
        path="/Hello_VMS_FrontEnd/menu/analytics"
        element={
          <Analytics
            visitorList={visitorList}
            setVisitorList={setVisitorList} /* user={user} setUser={setUser} */
          />
        }
      />
      <Route
        path="/Hello_VMS_FrontEnd/menu/visitor_database/database_results"
        element={<DatabaseResults />}
      />
    </Routes>
  );
}

export default App;
