import "./Weather.css";
import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import Forecast from "./Forecast.js";
import { FidgetSpinner } from "react-loader-spinner";

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
  }

  if (loaded) {
    return (
      <div className="Weather">
        <form className="row mb-3 py-3" onSubmit={handleSubmit}>
          <div className="search-input col-10">
            <input
              className="form-control"
              type="text"
              placeholder="Type a city"
              onChange={changeCity}
            />
          </div>
          <div className="col-2">
            <input className="btn" type="submit" value="Search" />
          </div>
        </form>
        <div className="row my-4">
          <div className="col-10 col-sm text-end order-sm-3 ">
            <h3>
              {weatherData.city}, {weatherData.country}
            </h3>
            <ul className="ul-right op p-0">
              <li>
                <CurrentDate />
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
          <div className="col-6 col-sm text-start">
            <span className="current-temp-icon">
              <WeatherIcon code={weatherData.icon} size={40} />
            </span>

            <Temperature temp={weatherData.temp} />
          </div>
          <div className="col-6 col-sm text-start ps-0 op">
            <ul className="ul-center t-14">
              <li>Feels like: {weatherData.feel}??C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}m/s</li>
            </ul>
          </div>
        </div>
        <div className="row py-2">
          <Forecast city={weatherData.city} />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="loader">
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={["#ff0000", "#00ff00", "#0000ff"]}
          backgroundColor="#579bb1"
        />
      </div>
    );
  }
}
