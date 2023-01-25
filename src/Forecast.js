import axios from "axios";
import React, { useState } from "react";
//import axios from "axios";

export default function Forecast(props) {
  let days = [0, 1, 2, 3, 4, 5];
  let [forecastData, setForecastData] = useState({});

  function getTemp(response, index) {
    setForecastData({
      max: Math.round(response.data.daily[index].temperature.maximum),
      min: Math.round(response.data.daily[index].temperature.minimum),
      icon: response.data.daily[index].condition.icon,
    });
  }
  function day(index) {
    let key = `60ed4de53det2358c47boa751cc30ef5`;
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${key}&units=metric`;

    axios(url).then(getTemp(index));

    return (
      <div className="col-2">
        <div>Day</div>
        <div>icon</div>
        <div>
          {forecastData.max} {forecastData.min}
        </div>
      </div>
    );
  }

  return <div className="row">{days.map(day)}</div>;
}
