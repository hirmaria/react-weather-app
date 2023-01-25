import axios from "axios";
import React, { useState } from "react";

export default function Forecast(props) {
  let days = [0, 1, 2, 3, 4, 5];
  let [weatherData, setWeatherData] = useState({});

  function getTemperature(response) {
    setWeatherData({
      maxTemp: response.data.daily[0].temperature.maximum,
      minTemp: response.data.daily[0].temperature.minimum,
      icon: response.data.daily[0].condition.icon,
    });
  }

  function getDay(day) {
    let key = "60ed4de53det2358c47boa751cc30ef5";
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${key}&units=metric`;

    axios(url).then(getTemperature);

    return (
      <div className="col text-center">
        <div>Wed</div>
        <div>{weatherData.icon}</div>
        <div>
          {weatherData.maxTemp} {weatherData.minTemp}
        </div>
      </div>
    );
  }

  return <div className="row">{days.map(getDay)}</div>;
}
