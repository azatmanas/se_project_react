import React, { useState } from "react";
import "./ToggleSwitch.css";
const ToggleSwitch = () => {
  const [curentTempUnit, handleToggleSwitchChange] = useState("C");
  const handleChange = () => {
    if (curentTempUnit === "C") handleToggleSwitchChange("F");
    if (curentTempUnit === "F") handleToggleSwitchChange("C");
  };
  return (
    <label htmlFor="switch" className="switch">
      <input type="checkbox" className="switch__box" onChange={handleChange} />
      <span
        className={
          curentTempUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <p
        className={`switch__temp-F ${
          curentTempUnit === "F" && "switch__active"
        } `}
      >
        F
      </p>
      <p
        className={`switch__temp-C ${
          curentTempUnit === "C" && "switch__active"
        } `}
      >
        C
      </p>
    </label>
  );
};

export default ToggleSwitch;
