import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ onLogin, handleSignUp, isOpen, closeActiveModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <ModalWithForm
      title="login"
      buttonText="login"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      onSubmit={handleLogin}
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

      <button
        className="modal__register-btn"
        type="button"
        onClick={handleSignUp}
      >
        or Register
      </button>
    </ModalWithForm>
  );
}

export default LoginModal;
