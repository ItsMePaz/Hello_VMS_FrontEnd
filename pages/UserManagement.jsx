import { Link } from "react-router-dom";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import PageTitle from "../components/PageTitle";
import InputCell from "../components/InputCell";
import "../styles/header.css";
import "../src/App.css";
import "../styles/userManagementResp.css";
import RemoveUserModal from "../modals/RemoveUserModal";

function UserManagement() {
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
  ];
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
              user_name={admin.user_name}
              user_password={admin.user_password}
              user_id={admin.user_id}
            />
          ))}
        </div>
      </div>

      <Link to="/Hello_VMS_FrontEnd/">
        <div className="back-logout-btn logout-placement">LOG OUT</div>
      </Link>
      {/* back-logout-btn was used as class to define the style for the ADD USER button */}
      <button className="back-logout-btn back-placement tw-bg-[#57dd57d8] tw-text-black">
        ADD USER
      </button>
    </div>
  );
}

export default UserManagement;
