import React from "react";
import "../src/app.css";

function InputCell({ user_name, user_password, user_id }) {
  return (
    <div className="cell-placement">
      <div className="cell-border tw-flex tw-bg-white">
        <div>{user_name}</div>
        <div>{user_password}</div>
        <button id={user_id}>REMOVE USER</button>
      </div>
    </div>
  );
}

export default InputCell;
