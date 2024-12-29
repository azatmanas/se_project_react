import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  closeActiveModal,
  isOpen,
  openLoginModal,
  handleRegister,
}) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
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
    handleRegister(data);
  }

  return (
    <ModalWithForm
      title="Register"
      name="register"
      buttonText="Register"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      className="modal__container"
      onSubmit={handleSubmit}
    >
      <label htmlFor="register-email" className="modal__label">
        Email
        <input
          type="email"
          name="email"
          id="register-email"
          className="modal__input"
          value={data.email}
          placeholder="email"
          onChange={handleChange}
        />
      </label>

      <label htmlFor="register-password" className="modal__label">
        Password
        <input
          type="password"
          name="password"
          id="register-password"
          className="modal__input"
          value={data.password}
          placeholder="password"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="register-name" className="modal__label">
        Name
        <input
          type="text"
          name="name"
          id="register-name"
          className="modal__input"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="register-avatar" className="modal__label">
        Image
        <input
          type="url"
          name="avatar"
          className="modal__input"
          id="register-avatar"
          value={data.avatar}
          placeholder="avatar"
          onChange={handleChange}
        />
      </label>
      <button className="modal__btn-login" onClick={openLoginModal}>
        or Log in
      </button>
    </ModalWithForm>
  );
}

export default RegisterModal;
