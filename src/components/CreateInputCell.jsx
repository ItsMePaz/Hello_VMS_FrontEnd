import "../app.css";
import "../styles/userManagementResp.css";
import { useState } from "react";

import RemoveUserModal from "../modals/RemoveUserModal";

function CreatInputCell({ user_name, user_userName, user_password, user_id }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show ? <RemoveUserModal userName={user_name} setShow={setShow} /> : null}
      <div className="cell-placement">
        <div className="cell-border tw-bg-[#FACF36]">
          <div>{user_userName}</div>
          <div>{user_name}</div>

          <div>{user_password}</div>
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

export default CreatInputCell;
