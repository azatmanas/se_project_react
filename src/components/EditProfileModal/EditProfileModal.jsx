import React, { useContext, useEffect } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import "./EditProfileModal.css";
function EditProfileModal({
  isOpen,
  closeActiveModal,
  isLoading,
  handleEditProfile,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [values, handleChange, resetForm] = useForm({
    name: currentUser.name || "",
    avatar: currentUser.avatar || "",
  });

  useEffect(() => {
    if (currentUser) {
      resetForm({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfile(values);
    closeActiveModal();
  };

  return (
    <ModalWithForm
      title="Edit Profile"
      buttonText={isLoading ? "Saving..." : "Save"}
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      className="modal__container"
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="avatar" className="modal__label">
        Image
        <input
          type="url"
          className="modal__input"
          name="avatar"
          placeholder="avatar"
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
