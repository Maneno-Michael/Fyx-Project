import React from "react";
// import "./modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
       
        <div className="body">
          <p>Enter the amount you wish to withdraw</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
           
          >
          
          </button>
          <button>submit</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;