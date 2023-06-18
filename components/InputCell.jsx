import "../src/app.css";
import "../styles/userManagementResp.css";
import { useState } from "react";
import RemoveUserModal from "../modals/RemoveUserModal";

function InputCell({ user_name, user_password, user_id }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show ? <RemoveUserModal userName={user_name} setShow={setShow} /> : null}
      <div className="cell-placement">
        <div className="cell-border tw-bg-white">
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

export default InputCell;
