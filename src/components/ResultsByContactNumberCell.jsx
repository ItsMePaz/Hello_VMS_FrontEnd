import "../app.css";
import "../styles/userManagementResp.css";
import { useState } from "react";
import ShowResultsByContactModal from "../modals/ShowResultsByContactModal";
function ResultsByContactNumberCell() {
  const [show, setShow] = useState(false);
  const [contactNumber, setContactNumber] = useState("");
  const handleSearchByContact = (e) => {
    e.preventDefault();
    setShow(true);
    console.log("name results");
  };
  return (
    <div>
      {show ? (
        <ShowResultsByContactModal
          setShow={setShow}
          contactNumber={contactNumber}
        />
      ) : null}
      <div className="cell-placement">
        <div className="cell-border tw-bg-[#FACF36]  md:tw-h-[5em]  lg:tw-max-w-[45em] xl:tw-max-w-[70em] xl:tw-flex xl:tw-flex-row">
          <div>
            <strong>RESULTS BY CONTACT NUMBER</strong>
          </div>
          <div>
            <form
              id="contactForm"
              onSubmit={handleSearchByContact}
              className="xl:tw-flex-col-reverse tw-flex-col tw-gap-[20px] tw-text-center tw-mt-[2%]"
            >
              <input
                className="tw-w-[10rem]  lg:tw-w-[300px] tw-rounded-xl tw-px-[2%]"
                type="text"
                placeholder="Input contact number here"
                name="contact"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </form>
          </div>

          <button
            className="cellButton tw-w-[9em] tw-bg-black"
            type="submit"
            form="contactForm"
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

export default ResultsByContactNumberCell;
