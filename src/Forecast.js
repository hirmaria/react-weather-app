import "./Forecast.css";
import axios from "axios";
import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  //let days = [0, 1, 2, 3, 4, 5];

  function handleRespond(response) {
    setLoaded(true);
    setWeatherData(response.data.daily);
    console.log(weatherData);
  }

  let [loaded, setLoaded] = useState(false);
  let [weatherData, setWeatherData] = useState(null);

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col text-center">
            <div className="forecast-day">Wed</div>
            <WeatherIcon code="clear-sky-day" size={34} />
            <div className="daily-temperature">
              <span className="daily-temperature-max">19</span>{" "}
              <span className="daily-temperature-min">10</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let key = "60ed4de53det2358c47boa751cc30ef5";
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${key}&units=metric`;
    axios(url).then(handleRespond);
  }
}
