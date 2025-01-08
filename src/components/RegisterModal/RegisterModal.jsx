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
      title="Sign up"
      name="sign up"
      buttonText="Next"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      className="modal__container"
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          id="email"
          className="modal__input"
          value={""}
          placeholder="Email"
          onChange={handleChange}
        />
      </label>

      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          id="password"
          className="modal__input"
          value={""}
          placeholder="Password"
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          id="name"
          className="modal__input"
          placeholder="Name"
          value={""}
          onChange={handleChange}
        />
      </label>

      <label className="modal__label">
        Avatar Url
        <input
          type="url"
          name="avatar"
          className="modal__input"
          id="avatar"
          value={""}
          placeholder="Avatar Url"
          onChange={handleChange}
        />
      </label>
      <button
        type="button"
        className="modal__btn-login"
        onClick={openLoginModal}
      >
        or Log in
      </button>
    </ModalWithForm>
  );
}

export default RegisterModal;
