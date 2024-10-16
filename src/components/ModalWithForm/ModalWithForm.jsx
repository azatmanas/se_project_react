import "./ModalWithForm.css";
import closeModal from "../../assets/closeModal.png";
function ModalWithForm({
  children,
  title,
  buttonText,
  closeActiveModal,
  isOpen,
}) {
  return (
    <div className={`modal ${isOpen === "add-garment" && "modal_opened"}`}>
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>

        <img
          src={closeModal}
          alt="closeModal"
          onClick={closeActiveModal}
          className="modal__close"
        />
        <form action="" className="modal__form">
          {children}
          <button className="modal__submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}
export default ModalWithForm;
