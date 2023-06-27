import "../app.css";
import "../styles/userManagementResp.css";
import { useState } from "react";
import ShowResultsByLastNameModal from "../modals/ShowResultsByLastNameModal";

function ResultsByLastNameCell() {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSearchByName = (e) => {
    e.preventDefault();
    setShow(true);
    console.log("name results");
  };
  return (
    <div>
      {show ? (
        <ShowResultsByLastNameModal setShow={setShow} lastName={lastName} />
      ) : null}
      <div className="cell-placement">
        <div className="cell-border tw-bg-[#FACF36]  md:tw-h-[5em]  lg:tw-max-w-[45em] xl:tw-max-w-[70em] xl:tw-flex xl:tw-flex-row">
          <div>
            <strong>RESULTS BY LAST NAME</strong>
          </div>
          <div>
            <form
              id="lastNameForm"
              onSubmit={handleSearchByName}
              className="xl:tw-flex-col-reverse tw-flex-col tw-gap-[20px] tw-text-center tw-mt-[2%]"
            >
              <input
                className="tw-w-[10rem]  lg:tw-w-[300px] tw-rounded-xl tw-px-[2%]"
                type="text"
                placeholder="Input last name here"
                name="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </form>
          </div>

          <button
            className="cellButton tw-w-[9em] tw-bg-black"
            type="submit"
            form="lastNameForm"
            /*     onClick={() => {
              setShow(true);
            }} */
          >
            SHOW RESULTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultsByLastNameCell;
