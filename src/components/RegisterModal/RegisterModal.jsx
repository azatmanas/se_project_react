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
      title="Sign in"
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
    </ModalWithForm>
  );
}

export default RegisterModal;
