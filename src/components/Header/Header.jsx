import "./Header.css";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  handleLoginModal,
  openRegister,
}) {
  const currentUser = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const renderUserAvatar = () => {
    if (currentUser && currentUser.avatar) {
      return (
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="header__avatar"
        />
      );
    }
    if (currentUser && currentUser.name) {
      const initial = currentUser.name.charAt(0).toUpperCase();
      return <div className="header__placeholder">{initial}</div>;
    }
    return null;
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img className="header__logo" src={logo} alt="WTWR logo" />
        </Link>
      </div>
      <p className="header__date">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__toggle-switch">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-btn"
            >
              +Add Clothes
            </button>
            <div className="header__user-container">
              <p className="header__username">{currentUser?.name || "User"}</p>
              <Link to="/profile" className="header__link">
                {renderUserAvatar()}
              </Link>
            </div>
          </>
        ) : (
          <div className=" header__user-container header__auth-btn">
            <button
              onClick={openRegister}
              className="header__signup"
              type="button"
            >
              Sign Up
            </button>
            <button
              onClick={handleLoginModal}
              className="header__login"
              type="button"
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
