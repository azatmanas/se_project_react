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
      <label className="modal__label">
        Email:
        <input
          type="email"
          id="email-input"
          className="modal__input"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className="modal__label">
        Password:
        <input
          type="password"
          id="password-input"
          className="modal__input"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <div className="modal__register-btn">
        <button
          className="modal__close "
          type="button"
          onClick={() => setActiveModal("sign-up")}
        >
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
