import "./ItemModal.css";
function ItemModal({ activeModal, closeActiveModal, selectedCard }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"}`}>
      <div className="modal__container modal__container_type_image">
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        >
          Close
        </button>
        <img src={selectedCard.link} alt="" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__title">{selectedCard.name}</h2>
          <p className="modal__weather">Weather: {selectedCard.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
