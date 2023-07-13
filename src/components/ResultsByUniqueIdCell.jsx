import "../App.css";
import "../styles/userManagementResp.css";
import { useState } from "react";
import ShowResultsByUniqueIdModal from "../modals/ShowResultsByUniqueIdModal";
function ResultsByUniqueIdCell() {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const handleSearchById = (e) => {
    e.preventDefault();
    setShow(true);
    console.log("name results");
  };
  return (
    <div>
      {show ? <ShowResultsByUniqueIdModal setShow={setShow} id={id} /> : null}
      <div className="cell-placement">
        <div className="cell-border tw-bg-[#FACF36]  md:tw-h-[5em]  lg:tw-max-w-[45em] xl:tw-max-w-[70em] xl:tw-flex xl:tw-flex-row tw-z-[3000]">
          <div>
            <strong>RESULTS BY UNIQUE ID</strong>
          </div>
          <div>
            <form
              id="idForm"
              onSubmit={handleSearchById}
              className="xl:tw-flex-col-reverse tw-flex-col tw-gap-[20px] tw-text-center tw-mt-[2%]"
            >
              <input
                className="tw-w-[10rem]  lg:tw-w-[300px] tw-rounded-xl tw-px-[2%]"
                type="text"
                placeholder="Input contact number here"
                name="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </form>
          </div>

          <button
            className="cellButton tw-w-[9em] tw-bg-black"
            type="submit"
            form="idForm"
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

export default ResultsByUniqueIdCell;
