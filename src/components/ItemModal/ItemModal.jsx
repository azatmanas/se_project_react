import "./ItemModal.css";
import closeIcon from "../../assets/closeIcon.svg";
function ItemModal({ activeModal, closeActiveModal, selectedCard }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__container modal__container_type_image">
        {/* <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        > */}
        <img
          src={closeIcon}
          alt="closeIcon"
          className="modal__close"
          onClick={closeActiveModal}
        />
        {/* </button> */}
        <img src={selectedCard.link} alt="cardLink" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{selectedCard.name}</h2>
          <p className="modal__weather">Weather: {selectedCard.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
