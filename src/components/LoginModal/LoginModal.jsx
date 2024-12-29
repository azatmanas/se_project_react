import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ onLogin, setActiveModal, isOpen, closeActiveModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <div className="modal__container">
        <label htmlFor="email-input" className="modal__label">
          Email:
          <input
            type="email"
            id="email-input"
            className="modal__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password-input" className="modal__label">
          Password:
          <input
            type="password"
            id="password-input"
            className="modal__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button
          className="modal__submit"
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
