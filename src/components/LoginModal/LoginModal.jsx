import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
function LoginModal({
  onLogin,
  onClose,
  isOpen,
  closeActiveModal,
  handleSubmit,
}) {
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
      className="modal__container"
      onSubmit={handleSubmit}
    >
      <div className="modal__container">
        <form className="modal__form">
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
          <button type="submit" className="modal__button">
            Login
          </button>
          <button className="modal__button" type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
