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
      <Route path="/login" element={<LogIn />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/visitor_database" element={<VisitorDataBase />} />
      <Route path="/menu/monitoring" element={<Monitoring />} />
      <Route path="/menu/analytics" element={<Analytics />} />
    </Routes>
  );
}

export default App;
