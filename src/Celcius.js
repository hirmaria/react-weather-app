import "./Temperature.css";
import React, { useState } from "react";

export default function Temperature(props) {
  let [temperature, setTemperature] = useState(props.temp);
  let [celcius, setCelcius] = useState(true);

  function handleFahrenheit(event) {
    event.preventDefault();
    setCelcius(false);
    setTemperature(Math.round(temperature * 1.8 + 32));
  }

  function handleCelcius(event) {
    event.preventDefault();
    setCelcius(true);
    setTemperature(props.temp);
  }

  return (
    <span className="Temperature">
      <span className="current-temp">{temperature}</span>
      <span className="units">
        {{ celcius } ? (
          <a href="/" className="inactive">
            °C
          </a>
        ) : (
          <a href="/" className="active" onClick={handleCelcius}>
            °C
          </a>
        )}

        {" |"}
        {{ celcius } ? (
          <a href="/" className="active" onClick={handleFahrenheit}>
            °F
          </a>
        ) : (
          <a href="/" className="inactive">
            °F
          </a>
        )}
      </span>
    </span>
  );
}
