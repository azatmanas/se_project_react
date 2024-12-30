import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import "./AddItemModal.css";
const AddItemModal = ({ closeActiveModal, isOpen, onAddItem, isLoading }) => {
  const [values, handleChange, restForm] = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(values.name, values.imageUrl, values.weather, restForm);
  };
  return (
    <ModalWithForm
      title="New Garment"
      buttonText={isLoading ? "Saving..." : "Save"}
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      className="modal__container"
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          name="name"
          id="name"
          placeholder="Name"
          value={values.name || ""}
          onChange={handleChange}
        />
      </label>

      <label className="modal__label">
        Image
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          name="imageUrl"
          placeholder="imageUrl"
          value={values.imageUrl || ""}
          onChange={handleChange}
        />
      </label>

      <fieldset className="modal__radio-fieldset">
        <legend className="modal__legend">Select the weather type:</legend>
        <section className="modal__radio-buttons">
          <label className="modal__label modal__label_type_radio">
            <input
              id="hot"
              type="radio"
              className="modal__radio-input"
              name="weather"
              value="hot"
              checked={values.weather === "hot"}
              onChange={handleChange}
            />
            Hot
          </label>
          <label className="modal__label modal__label_type_radio">
            <input
              id="warm"
              type="radio"
              className="modal__radio-input"
              name="weather"
              value="warm"
              checked={values.weather === "warm"}
              onChange={handleChange}
            />
            Warm
          </label>
          <label className="modal__label modal__label_type_radio">
            <input
              id="cold"
              type="radio"
              className="modal__radio-input"
              name="weather"
              value="cold"
              checked={values.weather === "cold"}
              onChange={handleChange}
            />
            Cold
          </label>
        </section>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
