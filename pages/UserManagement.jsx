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
          <InputCell
            user_name="Wilbert"
            user_password="Wildbert's Password"
            user_id="12351241"
          />
          <InputCell
            user_name="Ryan"
            user_password="Ryan's Password"
            user_id="12351241"
          />
          <InputCell
            user_name="Michael"
            user_password="Michael's Password"
            user_id="12351241"
          />
          <InputCell
            user_name="Bryan"
            user_password="Bryan's Password"
            user_id="12351241"
          />
          <InputCell
            user_name="Random User"
            user_password="Random User's Password"
            user_id="12351241"
          />
        </div>
      </div>

      <Link to="/Hello_VMS_FrontEnd/">
        <div className="back-logout-btn logout-placement">LOG OUT</div>
      </Link>
      {/* back-logout-btn was used as class to define the style for the ADD USER button */}
      <button className="back-logout-btn back-placement">ADD USER</button>
    </div>
  );
}

export default UserManagement;
