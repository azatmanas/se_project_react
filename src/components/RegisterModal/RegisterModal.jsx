import { useState } from "react";

function RegisterModal() {
  const { data, setData } = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

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
          type="email"
          className="modal__input"
          name="name"
          id="name"
          placeholder="Name"
          value={values.name || ""}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          type="password"
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
}

export default RegisterModal;
