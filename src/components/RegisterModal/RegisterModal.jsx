import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import "./RegisterModal.css";

function RegisterModal({
  closeActiveModal,
  isOpen,
  openLoginModal,
  handleRegister,
}) {
  const [values, handleChange, resetForm] = useForm({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(values);
    resetForm();
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
          value={values.email}
          placeholder="Email"
          onChange={handleChange}
          autoComplete="off"
        />
      </label>

      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          id="password"
          className="modal__input"
          value={values.password}
          placeholder="Password"
          onChange={handleChange}
          autoComplete="off"
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
          value={values.name}
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
          value={values.avatar}
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
