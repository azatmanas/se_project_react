import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../utils/useForm";
import "./AddItemModal.css";
const AddItemModal = ({ closeActiveModal, isOpen, onAddItem, isLoading }) => {
  const [values, handleChange, resetForm] = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleUrlChange = (e) => {
  //   setImageUrl(e.target.value);
  // };

  // const handleWeatherChange = (e) => {
  //   setWeather(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(values.name, values.imageUrl, values.weather);
    resetForm();
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
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="imageUrl"
          value={values.imageUrl}
          onChange={handleChange}
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
              name="weather"
              value="hot"
              checked={values.weather === "hot"}
              onChange={handleChange}
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
              name="weather"
              value="warm"
              checked={values.weather === "warm"}
              onChange={handleChange}
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
