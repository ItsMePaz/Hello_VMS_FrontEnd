import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PageTitle from "../components/PageTitle";
import InputCell from "../components/InputCell";
import "../styles/header.css";
import "../src/App.css";

function UserManagement() {
  return (
    <div>
      <PageHeader bgColor=" tw-bg-white" />
      <PageTitle className="tw-mb-[20px]" title="USER MANAGEMENT" />
      <br />
      <div className="back-drop tw-overflow-auto">
        <div className=" tw-bg-[#59e0f2] tw-pb-[20px] ">
          <div className="cell-placement">
            <div className="cell-title-border tw-flex">
              <div>NAME</div>
              <div>PASSWORD</div>
              <div> </div>
            </div>
          </div>
          <InputCell
            user_name="WILBERT"
            user_password="PASSWORD"
            user_id="12351241"
          />
          <InputCell
            user_name="RYAN  "
            user_password="PASSWORD"
            user_id="12351241"
          />
          <InputCell
            user_name="BRYAN  "
            user_password="PASSWORD"
            user_id="12351241"
          />
          <InputCell
            user_name="MICHAEL"
            user_password="PASSWORD"
            user_id="12351241"
          />
          <InputCell
            user_name="GUARD 1"
            user_password="PASSWORD"
            user_id="12351241"
          />
          <InputCell
            user_name="GUARD 1"
            user_password="PASSWORD"
            user_id="12351241"
          />
          <InputCell
            user_name="GUARD 1"
            user_password="PASSWORD"
            user_id="12351241"
          />
          <InputCell
            user_name="GUARD 1"
            user_password="PASSWORD"
            user_id="12351241"
          />
        </div>
      </div>

      <Link to="/Hello_VMS_FrontEnd/">
        <div className="back-logout-btn logout-placement">LOG OUT</div>
      </Link>
    </div>
  );
}

export default UserManagement;
