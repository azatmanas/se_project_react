import "./WeatherCard.css";
import shine from "../../assets/shine.png";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
      <img src={shine} alt="sunny" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
