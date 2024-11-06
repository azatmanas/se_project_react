import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../context/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  // const [currentTempUnit, handleToggleSwitchChange] = useState("C");
  // const handleChange = () => {
  //   if (currentTempUnit === "C") handleToggleSwitchChange("F");
  //   if (currentTempUnit === "F") handleToggleSwitchChange("C");
  // };

  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        onChange={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <p
        className={`switch__temp-F ${
          currentTemperatureUnit === "F" && "switch__active"
        } `}
      >
        F
      </p>
      <p
        className={`switch__temp-C ${
          currentTemperatureUnit === "C" && "switch__active"
        } `}
      >
        C
      </p>
    </label>
  );
}

export default ToggleSwitch;
