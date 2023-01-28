import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  // let days = [1, 2, 3, 4, 5, 6];
  useEffect(() => {
    setLoaded(false);
  }, [props.city]);
  function handleRespond(response) {
    setLoaded(true);
    setWeatherData(response.data.daily);
  }

  let [loaded, setLoaded] = useState(false);
  let [weatherData, setWeatherData] = useState(null);

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {weatherData.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-2 text-center" key={index}>
                  <ForecastDay forecast={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let key = "60ed4de53det2358c47boa751cc30ef5";
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${key}&units=metric`;
    axios(url).then(handleRespond);
  }
}
