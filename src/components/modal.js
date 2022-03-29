import React from "react";
// import "./modal.css";
export const Modal = ({ show, submit}) => {
  return (
    <div className="fomu"
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
        width:"25%",
      
        marginLeft:"40%",
        marginTop:"-3%",
        borderRadius:"20px"
      }}
    >
     
       
     
      <div className="card lipa w-100 p-3 pl-5"  >
        <div className="lipa" >
        <span onClick={submit} className="cloz bn">x</span>
          <h5>Enter the amount of Money</h5>
          <h6> you wish to withdraw</h6>

          <button onClick={submit} className="btnsubmit"> submit</button>
        </div>
      </div>
      </div>

  )
};
// function Modal({ setOpenModal }) {
//   return (
//     <div className="modalBackground">
//       <div className="modalContainer">
//         <div className="titleCloseBtn">
//           <button
//             onClick={() => {
//               setOpenModal(false);
//             }}
//           >
//             X
//           </button>
//         </div>
       
//         <div className="body">
//           <p>Enter the amount you wish to withdraw</p>
//         </div>
//         <div className="footer">
//           <button
//             onClick={() => {
//               setOpenModal(false);
//             }}
           
//           >
          
//           </button>
//           <button>submit</button>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Modal;