import "./ConfirmationModal.css";

function ConfirmationModal({
  activeModal,
  closeActiveModal,
  selectedCard,
  handleDeleteItem,
}) {
  const onCardDelete = () => {
    handleDeleteItem(selectedCard);
  };

  return (
    <div
      className={`modal ${
        activeModal === "dlete-confirmatin" && "modal_opened"
      }`}
    >
      <div className="modal__form modal__content modal__content-delete ">
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        >
          X
        </button>
        <p className="modal__confirmation-message">
          Are you sure you want to delete this item?
        </p>
        <button onClick={onCardDelete} type="button" className="modal__delete">
          Yes Delete
        </button>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__cancel"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
