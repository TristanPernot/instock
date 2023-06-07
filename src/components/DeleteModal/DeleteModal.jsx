// import React from "react";
// import "./DeleteModal.scss";
// // import Modal from "react-modal";
// import closeICon from "../../assets/Icons/close-24px.svg";

// function DeleteModal({ deleteModalInfo, onCancel, onConfirm }) {
//   const modalIsOpen = Object.keys(deleteModalInfo).length > 0;

//   return (
//     <Modal
//       className="delete-modal"
//       overlayClassName="delete-modal__overlay"
//       ariaHideApp={false} // gets rid of warning in console
//       isOpen={modalIsOpen}
//       onRequestClose={onCancel}
//     >
//       <button
//         className="delete-modal__btn delete-modal__close-btn"
//         onClick={onCancel}
//       >
//         <img src={closeICon} alt="close icon" />
//       </button>

//       <h1 className="delete-modal__title">{deleteModalInfo.title}</h1>
//       <p className="delete-modal__text">{deleteModalInfo.text}</p>

//       <div className="delete-modal__btns">
//         <button className="delete-modal__btn" onClick={onCancel}>
//           Cancel
//         </button>
//         <button
//           className="delete-modal__btn delete-modal__btn--delete"
//           onClick={() => onConfirm(deleteModalInfo.id)}
//         >
//           Delete
//         </button>
//       </div>
//     </Modal>
//   );
// }

// export default DeleteModal;
