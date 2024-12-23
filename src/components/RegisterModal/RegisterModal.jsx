import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  closeActiveModal,
  isOpen,
  openLoginModal,
  openRegister,
}) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    imageUrl: "",
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
    openRegister(data);
  }

  const handleRegister = ({ name, avatar, email, password }) => {
    setIsLoading(true);
    register({ name, avatar, email, password })
      .then(() => {
        return Login({ email, password });
      })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsSignedIn(true);
        setActiveModal("");
      })
      .catch((err) => {
        console.error("Registration/Login error:", err);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <ModalWithForm
      title="register"
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

      <label htmlFor="register-imageUrl" className="modal__label">
        Image
        <input
          type="url"
          name="imageUrl"
          className="modal__input"
          id="register-imageUrl"
          value={data.imageUrl}
          placeholder="imageUrl"
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
