import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import PageTitle from "../components/PageTitle";
import ShowInputCell from "../components/ShowInputCell";
import "../styles/header.css";
import "../App.css";
import "../styles/userManagementResp.css";
import RemoveUserModal from "../modals/RemoveUserModal";
import { useNavigate } from "react-router-dom";
import WaveAnimation from "../components/WaveAnimation";
import userService from "../services/visitorService";
import AddUserModal from "../modals/AddUserModal";
function UserManagement({ userList, setUserList }) {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.length === 0)
      navigate("/Hello_VMS_FrontEnd/", { replace: true });
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  useEffect(() => {
    userService
      .getUsers()
      .then((res) => {
        setUserList(res);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/Hello_VMS_FrontEnd/", { replace: true });
    console.log("You have been loggedout");
  };
  /*  const userList = [
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
  ]; */

  return (
    <div>
      {show ? <AddUserModal setShow={setShow} /> : null}

      <PageHeader bgColor=" tw-bg-white" />
      <PageTitle className="tw-mb-[20px]" title="USER MANAGEMENT" />
      <br />
      <div className="back-drop tw-overflow-auto">
        <div className=" tw-bg-[#59e0f2] tw-pb-[20px] ">
          <div className="cell-placement">
            <div className="cell-title-border">
              <div>SYSTEM USERS LIST</div>
            </div>
          </div>
          {userList.map((aUser) => (
            <ShowInputCell
              key={userList.id}
              aUser={userList}
              user_name={aUser.name}
              user_userName={aUser.username}
              user_password={aUser.password}
              user_id={aUser.id}
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
          setShow(true);
        }}
      >
        ADD USER
      </button>
      <WaveAnimation />
    </div>
  );
}

export default UserManagement;
