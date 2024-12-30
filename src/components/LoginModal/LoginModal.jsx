import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ onLogin, setActiveModal, isOpen, closeActiveModal }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <ModalWithForm
      title="Login"
      buttonText="Login"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      handleSubmit={handleLogin}
      className="modal__container"
    >
      <label className="modal__label">
        Email:
        <input
          type="email"
          id="email-input"
          className="modal__input"
          value={data.email}
          placeholder="Email"
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Password:
        <input
          type="password"
          id="password-input"
          className="modal__input"
          value={data.password}
          placeholder="Password"
          onChange={handleChange}
          required
        />
      </label>
      <div className="modal__register-btn">
        <button
          className="modal__close "
          type="button"
          onClick={() => setActiveModal("Register")}
        >
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
