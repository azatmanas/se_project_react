import { useContext } from "react";
import "./WeatherCard.css";
import shine from "../../assets/shine.png";
import CurrentTemperatureUnitContext from "../../context/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp[currentTemperatureUnit]} &deg; {""}
        {currentTemperatureUnit}
      </p>
      <img src={shine} alt="sunny" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
