import React from "react";
import "../styles/header.css";
import AddVisitorModal from "../modals/AddVisitorModal";
import { useState } from "react";
import { useEffect } from "react";

function AddVisitorBtn({ purpose, visitorList, setVisitorList }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show ? (
        <AddVisitorModal
          setShow={setShow}
          visitorList={visitorList}
          setVisitorList={setVisitorList}
        />
      ) : null}

      <button
        className="add-btn add-placement tw-w-[8em] tw-bg-[#59E0F2] tw-z-[1020]"
        onClick={() => setShow(true)}
      >
        {purpose}
      </button>
    </div>
  );
}

export default AddVisitorBtn;
