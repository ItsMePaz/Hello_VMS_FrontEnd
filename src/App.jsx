import "./App.css";
import { Route, Routes } from "react-router-dom";
import Menu from "../pages/Menu";
import LogIn from "../pages/LogIn";
import VisitorDataBase from "../pages/VisitorDataBase";
import Monitoring from "../pages/Monitoring";
import Analytics from "../pages/Analytics";

function App() {
  return (
    <Routes>
      <Route path="/Hello_VMS_FrontEnd/" element={<LogIn />} />
      <Route path="/Hello_VMS_FrontEnd/menu" element={<Menu />} />
      <Route
        path="/Hello_VMS_FrontEnd/menu/visitor_database"
        element={<VisitorDataBase />}
      />
      <Route
        path="/Hello_VMS_FrontEnd/menu/monitoring"
        element={<Monitoring />}
      />
      <Route
        path="/Hello_VMS_FrontEnd/menu/analytics"
        element={<Analytics />}
      />
    </Routes>
  );
}

export default App;
