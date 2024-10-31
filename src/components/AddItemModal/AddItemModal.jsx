import React from "react";
const AddItemModal = ({ closeActiveModal, isOpen, onAddItem }) => {
  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add garment"
      isOpen={activeModal === "add-garment"}
      closeActiveModal={closeActiveModal}
      className="modal__container"
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
        />
      </label>

      <label htmlFor="imgeUrl" className="modal__label">
        Image
        <input
          type="url"
          className="modal__input"
          id="imgeUrl"
          placeholder="imge Url"
        />
      </label>

      <fieldset className="modal__radio-fieldset">
        <legend className="modal__legend">Select the weather type:</legend>
        <section className="modal__radio-buttons">
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              id="hot"
              type="radio"
              className="modal__radio-input"
              name="weatherType"
            />
            Hot
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="warm"
              type="radio"
              className="modal__radio-input"
              name="weatherType"
            />
            Warm
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="cold"
              type="radio"
              className="modal__radio-input"
              name="weatherType"
            />
            Cold
          </label>
        </section>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
