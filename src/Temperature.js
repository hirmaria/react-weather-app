import "./Temperature.css";
import React, { useState } from "react";

export default function Temperature(props) {
  let [units, setUnits] = useState(true);

  function handleFahrenheit(event) {
    event.preventDefault();
    setUnits(false);
  }
  function handleCelsius(event) {
    event.preventDefault();
    setUnits(true);
  }

  if (units) {
    return (
      <span className="Temperature">
        <span className="current-temp">{props.temp}</span>
        <span className="units">
          <span>
            °C|
            <a href="/" className="active" onClick={handleFahrenheit}>
              °F
            </a>
          </span>
        </span>
      </span>
    );
  } else {
    let temp = Math.round(props.temp * 1.8 + 32);
    return (
      <span className="Temperature">
        <span className="current-temp">{temp}</span>
        <span className="units">
          <span>
            <a href="/" className="active" onClick={handleCelsius}>
              °C
            </a>
            |°F
          </span>
        </span>
      </span>
    );
  }
}
