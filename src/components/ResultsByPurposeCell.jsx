import "../App.css";
import "../styles/userManagementResp.css";
import { useState } from "react";
import ShowResultsByPurposeModal from "../modals/ShowResultsByPurposeModal";
function ResultsByPurposeCell() {
  const [show, setShow] = useState(false);
  const [purposeOfEntry, setPurposeOfEntry] = useState("");
  const handleSearchByPurpose = (e) => {
    e.preventDefault();
    setShow(true);
    console.log("name results");
  };
  return (
    <div>
      {show ? (
        <ShowResultsByPurposeModal
          setShow={setShow}
          purposeOfEntry={purposeOfEntry}
        />
      ) : null}
      <div className="cell-placement ">
        <div className="cell-border tw-bg-[#FACF36]  md:tw-h-[5em]  lg:tw-max-w-[45em] xl:tw-max-w-[70em] xl:tw-flex xl:tw-flex-row ">
          <div>
            <strong>RESULTS BY PURPOSE</strong>
          </div>
          <div>
            <form
              id="purposeForm"
              onSubmit={handleSearchByPurpose}
              className="xl:tw-flex-col-reverse tw-flex-col tw-gap-[20px] tw-text-center tw-mt-[2%]"
            >
              <select
                id="purposeList"
                className="tw-w-[10rem]  lg:tw-w-[300px] tw-rounded-xl tw-px-[2%]"
                placeholder="Input purpose here"
                name="purpose"
                value={purposeOfEntry}
                onChange={(e) => setPurposeOfEntry(e.target.value)}
                required
              >
                {" "}
                <option selected> Choose Purpose</option>
                <option value="Enrollment"> Enrollment/ Inquiry</option>
                <option value="Interview">Interview</option>
                <option value="AlumniVisit">Alumni Visit</option>
                <option value="ParentGuardianVisit">
                  {" "}
                  Parent/ Guardian Visit
                </option>
              </select>
            </form>
          </div>

          <button
            className="cellButton tw-w-[9em] tw-bg-black"
            type="submit"
            form="purposeForm"
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

export default ResultsByPurposeCell;
