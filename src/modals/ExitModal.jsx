import React from "react";

function ExitModal({ toggleModal, setNewDate, handleTimeExit, handleCancel }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Are you sure want to exit this visitor?</h2>
        <div>
          <button onClick={handleTimeExit}>YES</button>
          <button onClick={handleCancel}>CANCEL</button>
        </div>
      </div>
    </div>
  );
}

export default ExitModal;
