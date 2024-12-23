import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar1.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ handleAddClick, weatherData }) {
  const { isSignedIn, setIsSignedIn } = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(true);
  };

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
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          +Add Clothes
        </button>
        <div className="header__auth-container">
          {isSignedIn ? (
            <button
              onClick={handleSignOut}
              type="button"
              className="header__auth-btn"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={handleSignIn}
              type="button"
              className="header__auth-btn"
            >
              Sign In
            </button>
          )}
        </div>

        {/* <div className="header__user-container">
          <p className="header__username">Azat Manas</p>
          <Link to="/profile" className="header__link">
            <img src={avatar} alt="Azat Manas" className="header__avatar" />
          </Link>
        </div> */}
      </div>
    </header>
  );
}
export default Header;
