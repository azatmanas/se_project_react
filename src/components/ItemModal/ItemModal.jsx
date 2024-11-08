import "./ItemModal.css";
import closeIcon from "../../assets/closeIcon.svg";
function ItemModal({ isOpen, closeActiveModal, card, onDelete }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__container modal__content_type_image">
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        ></button>
        <img
          src={closeIcon}
          alt="closeIcon"
          className="modal__close"
          onClick={closeActiveModal}
        />

        <img src={card.imageUrl} alt="cardLink" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
        <button onClick={() => onDelete(card._id)} className="modal__delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
