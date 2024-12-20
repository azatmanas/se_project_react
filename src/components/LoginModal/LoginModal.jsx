import React, { useState } from "react";
function LoginModal({ onLogin, onClose }) {
  const { email, setEmail } = useState();
  const { password, setPassword } = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div className="modal">
      <form action="submit" onSubmit={handleLogin}>
        <h2>Login</h2>
        <label htmlFor="input">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
        <button type="cancel" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default LoginModal;
