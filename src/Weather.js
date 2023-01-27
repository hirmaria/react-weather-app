import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import Forecast from "./Forecast.js";

//import Forecast from "./Forecast";

export default function Weather(props) {
  let [loaded, setLoaded] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  let [city, setCity] = useState(props.defaultCity);

  function getWeather(response) {
    setWeatherData({
      temp: Math.round(response.data.temperature.current),
      feel: Math.round(response.data.temperature.feels_like),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      country: response.data.country,
      icon: response.data.condition.icon,
    });
    setLoaded(true);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = `60ed4de53det2358c47boa751cc30ef5`;
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios(url).then(getWeather);
    console.log(url);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <form className="row mb-3" onSubmit={handleSubmit}>
          <div className="col-8">
            <input
              className="form-control"
              type="text"
              placeholder="Type a city"
              onChange={changeCity}
            />
          </div>
          <div className="col-2">
            <input className="btn btn-primary" type="submit" value="Search" />
          </div>
          <div className="col-2">
            <button className="btn btn-secondary disabled">Current</button>
          </div>
        </form>
        <div className="row mb-2">
          <div className="col-4 text-start">
            <WeatherIcon code={weatherData.icon} size={40} />
            <Temperature temp={weatherData.temp} />
          </div>
          <div className="col-2 text-start op p-0">
            <ul className="ul-center ps-0 t-14">
              <li>Feels like: {weatherData.feel}°C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}m/s</li>
            </ul>
          </div>
          <div className="col-6 text-end pb-0">
            <h3 className="lh-1">
              {weatherData.city}, {weatherData.country}
            </h3>
            <ul className="ul-right op">
              <li>
                <CurrentDate />
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <Forecast city={weatherData.city} />
        </div>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
