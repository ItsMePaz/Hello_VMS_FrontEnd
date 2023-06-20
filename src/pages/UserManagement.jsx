import { Link } from "react-router-dom";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import PageTitle from "../components/PageTitle";
import InputCell from "../components/InputCell";
import "../styles/header.css";
import "../App.css";
import "../styles/userManagementResp.css";
import RemoveUserModal from "../modals/RemoveUserModal";
import { useNavigate } from "react-router-dom";
import WaveAnimation from "../components/WaveAnimation";

function UserManagement() {
  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/Hello_VMS_FrontEnd/", { replace: true });
    console.log("You have been loggedout");
  };
  const admins = [
    {
      user_name: "Michael",
      user_password: "PASSWORD",
      user_id: "12412412414",
    },
    {
      user_name: "Rodrigo",
      user_password: "PASSWORD",
      user_id: "12412412414",
    },
    {
      user_name: "Ryan",
      user_password: "PASSWORD",
      user_id: "12412412414",
    },
    {
      user_name: "Bryan",
      user_password: "PASSWORD",
      user_id: "12412412414",
    },
    {
      user_name: "Random",
      user_password: "PASSWORD",
      user_id: "12412412414",
    },
    {
      user_name: "Tom",
      user_password: "PASSWORDqetqetqe",
      user_id: "1adwawd",
    },
  ];
  const [users, setUsers] = useState(admins);
  return (
    <div>
      <PageHeader bgColor=" tw-bg-white" />
      <PageTitle className="tw-mb-[20px]" title="USER MANAGEMENT" />
      <br />
      <div className="back-drop tw-overflow-auto">
        <div className=" tw-bg-[#59e0f2] tw-pb-[20px] ">
          <div className="cell-placement">
            <div className="cell-title-border">
              <div>NAME</div>
              <div>PASSWORD</div>
              <div> </div>
            </div>
          </div>
          {admins.map((admin) => (
            <InputCell
              admin={admins}
              user_name={admin.user_name}
              user_password={admin.user_password}
              user_id={admin.user_id}
            />
          ))}
        </div>
      </div>

      <button
        className="back-logout-btn logout-placement tw-z-[1020]"
        onClick={() => {
          handleLogout();
        }}
      >
        LOG OUT
      </button>

      {/* back-logout-btn was used as class to define the style for the ADD USER button */}
      <button
        className="back-logout-btn back-placement tw-bg-[#57dd57d8] tw-text-black tw-z-[1020]"
        onClick={() => {
          console.log(users);
        }}
      >
        ADD USER
      </button>
      <WaveAnimation />
    </div>
  );
}

export default UserManagement;
