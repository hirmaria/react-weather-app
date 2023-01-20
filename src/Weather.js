import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import Icon from "./Icon";

export default function Weather() {
  let [city, setCity] = useState("");
  let [country, setCountry] = useState("");
  let [loaded, setLoaded] = useState(false);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5cd3854388db274e217fd69a4769c1e5&units=metric`;
  let foreCast = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=6&appid=5cd3854388db274e217fd69a4769c1e5`;
  let [temp, setTemp] = useState(null);
  let [feel, setFeel] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [description, setDescription] = useState(null);
  let [icon, setIcon] = useState(null);

  function getWeather(response) {
    setTemp(Math.round(response.data.main.temp));
    setFeel(Math.round(response.data.main.feels_like));
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setCity(response.data.name);
    setDescription(response.data.weather[0].main);
    setCountry(response.data.sys.country);
    setIcon(response.data.weather[0].icon);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios(url).then(getWeather);
    setLoaded(true);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  if (loaded === false) {
    return (
      <form className="row mb-2" onSubmit={handleSubmit}>
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
    );
  } else {
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
          <div className="col-4 text-center">
            <Icon icon={icon} />
            <span className="current-temp">{temp}</span>
            <span className="celcius">°C</span>
          </div>
          <div className="col-2 text-start op p-0">
            <ul className="ul-center ps-0 t-14">
              <li>Feels like: {feel}%</li>
              <li>Humidity: {humidity}%</li>
              <li>Wind: {wind}m/s</li>
            </ul>
          </div>
          <div className="col-6 text-end pb-0">
            <h3 className="lh-1">
              {city}, {country}
            </h3>
            <ul className="ul-right op">
              <li>
                <CurrentDate />
              </li>
              <li>{description}</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="text-center">Fri</div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="cloud"
            />
            <div>
              <span>1°C </span>
              <span className="op"> -3°C</span>
            </div>
          </div>
          <div className="col">
            <div className="text-center">Fri</div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="cloud"
            />
            <div>
              <span>1°C </span>
              <span className="op"> -3°C</span>
            </div>
          </div>
          <div className="col">
            <div className="text-center">Fri</div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="cloud"
            />
            <div>
              <span>1°C </span>
              <span className="op"> -3°C</span>
            </div>
          </div>
          <div className="col">
            <div className="text-center">Fri</div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="cloud"
            />
            <div>
              <span>1°C </span>
              <span className="op"> -3°C</span>
            </div>
          </div>
          <div className="col">
            <div className="text-center">Fri</div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="cloud"
            />
            <div>
              <span>1°C </span>
              <span className="op"> -3°C</span>
            </div>
          </div>
          <div className="col">
            <div className="text-center">Fri</div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="cloud"
            />
            <div>
              <span>1°C </span>
              <span className="op"> -3°C</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
