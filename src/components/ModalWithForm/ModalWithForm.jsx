import "./ModalWithForm.css";
function ModalWithForm({
  children,
  title,
  buttonText,
  activeModal,
  closeActiveModal,
}) {
  return (
    <div
      className={`modal ${activeModal === "add-garment" && "modal__opened"}`}
    >
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        >
          Close
        </button>
        <form action="" className="modal__form">
          {children}
          <button className="modal__submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}
export default ModalWithForm;
