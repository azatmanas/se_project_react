import "./WeatherCard.css";
import shine from "../../assets/shine.png";
function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">75 &deg; F</p>
      <img src={shine} alt="shine" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
