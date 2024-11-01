import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
const AddItemModal = ({ closeActiveModal, isOpen, onAddItem }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [imageUrl, setImageUrl] = useState("");
  const handlUrlChange = (e) => {
    console.log(e.target.value);
    setImageUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl });
  };
  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add garment"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      className="modal__container"
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label htmlFor="imgeUrl" className="modal__label">
        Image
        <input
          type="url"
          className="modal__input"
          id="imgeUrl"
          placeholder="imge Url"
          value={imageUrl}
          onChange={handlUrlChange}
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
