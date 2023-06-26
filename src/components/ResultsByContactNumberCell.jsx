import "../app.css";
import "../styles/userManagementResp.css";
import { useState } from "react";

import RemoveUserModal from "../modals/RemoveUserModal";

function ResultsByContactNumberCell({
  resultsBy,
  user_name,
  user_userName,
  user_password,
  user_id,
}) {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show ? <RemoveUserModal userName={user_name} setShow={setShow} /> : null}
      <div className="cell-placement">
        <div className="cell-border tw-bg-[#FACF36]  md:tw-h-[5em]  lg:tw-max-w-[45em] xl:tw-max-w-[70em] xl:tw-flex xl:tw-flex-row">
          <div>
            <strong>RESULTS BY CONTACT NUMBER</strong>
          </div>
          <div>
            <form
              id="contactForm"
              className="xl:tw-flex-col-reverse tw-flex-col tw-gap-[20px] tw-text-center tw-mt-[2%]"
            >
              <input
                className="tw-w-[10rem] tw-mb-[2%] lg:tw-w-[300px] tw-rounded-xl tw-px-[2%]"
                type="text"
                placeholder="Input first name here"
                required
              />
            </form>
          </div>

          <button
            form="contactForm"
            className="cellButton tw-w-[9em]"
            id={user_id}
            onClick={() => {
              setShow(true);
            }}
          >
            SHOW RESULTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultsByContactNumberCell;
