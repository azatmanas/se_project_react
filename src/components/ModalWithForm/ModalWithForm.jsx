import "./ModalWithForm.css";
import closeModal from "../../assets/closeModal.png";
function ModalWithForm({
  children,
  closeActiveModal,
  buttonText,
  isOpen,
  onSubmit,
  title,
}) {
  return (
    // <Modal name={name} onClose={onClose} isOpen={isOpen}>
    //   <h2 className="modal__title">{title}</h2>
    //   <img
    //     src={closeModal}
    //     alt="close"
    //     className="modal__close"
    //     onClick={onClose}
    //   />
    //   <form className="modal__form" onSubmit={onSubmit}>
    //     {children}
    //     <button className="modal__submit">{buttonText}</button>
    //   </form>
    // </Modal>
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <img
          src={closeModal}
          alt="closeModal"
          onClick={closeActiveModal}
          className="modal__close"
        />
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button className="modal__submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}
export default ModalWithForm;
