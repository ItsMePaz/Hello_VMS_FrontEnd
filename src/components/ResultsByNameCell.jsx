import "../App.css";
import "../styles/userManagementResp.css";
import { useState } from "react";
import ShowResultsByNameModal from "../modals/ShowResultsByNameModal";

function ResultsByNameCell() {
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
        <ShowResultsByNameModal setShow={setShow} firstName={firstName} />
      ) : null}
      <div className="cell-placement">
        <div className="cell-border tw-bg-[#FACF36]  md:tw-h-[5em]  lg:tw-max-w-[45em] xl:tw-max-w-[70em] xl:tw-flex xl:tw-flex-row tw-text-center">
          <div>
            <strong>RESULTS BY FIRST NAME</strong>
          </div>
          <div>
            <form
              id="nameForm"
              onSubmit={handleSearchByName}
              className="xl:tw-flex-col-reverse tw-flex-col tw-gap-[20px] tw-text-center tw-mt-[2%]"
            >
              <input
                className="tw-w-[10rem]  lg:tw-w-[300px] tw-rounded-xl tw-px-[2%]"
                type="text"
                placeholder="Input first name here"
                name="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </form>
          </div>

          <button
            className="cellButton tw-w-[9em] tw-bg-black"
            type="submit"
            form="nameForm"
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

export default ResultsByNameCell;
