// import { useEffect } from "react";

// export const Modal = ({ name, onClose, children, isOpen }) => {
//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === "Escape") {
//         onClose();
//       }
//     };

//     document.addEventListener("keydown", handleEscape);

//     return () => document.removeEventListener("keydown", handleEscape);
//   }, [onClose]);

//   const handleOverlay = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     <div
//       className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}
//       onClick={handleOverlay}
//     >
//       <div className="modal__container">
//         {children}
//         <button className="modal__close" type="button" onClick={onClose} />
//       </div>
//     </div>
//   );
// };
