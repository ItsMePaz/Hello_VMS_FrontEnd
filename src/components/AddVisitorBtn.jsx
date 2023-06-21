import React from "react";
import "../styles/header.css";

function AddVisitorBtn({ purpose }) {
  return (
    <button className="add-btn add-placement tw-w-[8em] tw-bg-[#59E0F2] tw-z-[1020]">
      {purpose}
    </button>
  );
}

export default AddVisitorBtn;
