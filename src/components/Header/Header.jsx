import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar1.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  handleRegister,
  handleLoginModal,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img className="header__logo" src={logo} alt="WTWRlogo" />
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
              <p className="header__username">Azat Manas</p>
              <Link to="/profile" className="header__link">
                <img src={avatar} alt="Azat Manas" className="header__avatar" />
              </Link>
            </div>
          </>
        ) : (
          <div className="header__auth-btn">
            <button
              onClick={handleRegister}
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
