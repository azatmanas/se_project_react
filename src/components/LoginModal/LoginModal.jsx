import React, { useState } from "react";
function LoginModal({ onLogin, onClose, isOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <form className="modal__form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <label htmlFor="email-input">
          Email:
          <input
            type="email"
            id="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password-input">
          Password:
          <input
            type="password"
            id="password-input"
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
  );
}

export default LoginModal;
