import "./ConfirmationModal.css";
import closeIcon from "../../assets/closeIcon.svg";

function ConfirmationModal({
  closeActiveModal,
  handleDeleteCard,
  selectedCard,
  isOpen,
}) {
  const onCardDelete = (e) => {
    e.preventDefault();
    handleDeleteCard(selectedCard);
  };

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__form modal__content modal__content-container ">
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        >
          X
        </button>
        <p className="modal__content-text">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </p>
        <button
          onClick={onCardDelete}
          type="button"
          className="modal__content-delete"
        >
          Yes Delete
        </button>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__content-cancel"
          src={closeIcon}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
