import "../app.css";
import "../styles/userManagementResp.css";
import { useState } from "react";

import RemoveUserModal from "../modals/RemoveUserModal";
import UpdateUserModal from "../modals/UpdateUserModal";
function ShowInputCell({
  update_id,
  user_name,
  user_userName,
  user_password,
  user_id,
  userList,
  setUserList,
  adminKey,
}) {
  const [show, setShow] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <div>
      {show ? (
        <RemoveUserModal
          userName={user_name}
          setShow={setShow}
          user_id={user_id}
          userList={userList}
          setUserList={setUserList}
        />
      ) : null}

      {showUpdateModal ? (
        <UpdateUserModal
          name={user_name}
          username={user_userName}
          password={user_password}
          setShowUpdateModal={setShowUpdateModal}
          update_id={update_id}
          userList={userList}
          setUserList={setUserList}
        />
      ) : null}
      <div className="cell-placement">
        <div className="cell-border tw-bg-white">
          <div>{user_userName}</div>
          <div>{user_name}</div>

          <button
            className="cellButton tw-w-[9em]"
            id={user_id}
            onClick={() => {
              setShowUpdateModal(true);
            }}
          >
            UPDATE USER
          </button>
          <button
            className="cellButton tw-w-[9em]"
            id={user_id}
            onClick={() => {
              setShow(true);
            }}
          >
            REMOVE USER
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowInputCell;
