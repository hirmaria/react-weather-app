import "./ForecastDay.css";
import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day(forecastTime) {
    let time = new Date(forecastTime * 1000);
    let dayNum = time.getDay();
    let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return day[dayNum];
  }

  return (
    <div className="ForecastDay">
      <div className="forecast-day mb-3">{day(props.forecast.time)}</div>
      <WeatherIcon code={props.forecast.condition.icon} size={34} />
      <div className="daily-temperature">
        <span className="daily-temperature-max">
          {Math.round(props.forecast.temperature.maximum)}°
        </span>{" "}
        <span className="daily-temperature-min">
          {Math.round(props.forecast.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
