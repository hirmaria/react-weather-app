import React from "react";

import ReactAnimatedWeather from "react-animated-weather";

export default function Icon(props) {
  if (props.icon === "01d") {
    return (
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="#FFE168"
        size={50}
        animate="true"
      />
    );
  }
  if (props.icon === "01n") {
    return (
      <ReactAnimatedWeather
        icon="CLEAR_NIGHT"
        color="#7C7F81"
        size={50}
        animate="true"
      />
    );
  }
  if (props.icon === "02d") {
    return (
      <ReactAnimatedWeather
        icon="PARTLY_CLOUDY_DAY"
        color="#7C7F81"
        size={50}
        animate="true"
      />
    );
  }
  if (props.icon === "02n") {
    return (
      <ReactAnimatedWeather
        icon="PARTLY_CLOUDY_NIGHT"
        color="#7C7F81"
        size={50}
        animate="true"
      />
    );
  }
  if (
    props.icon === "03d" ||
    props.icon === "03d" ||
    props.icon === "04d" ||
    props.icon === "03n"
  ) {
    return (
      <ReactAnimatedWeather
        icon="CLOUDY"
        color="#7C7F81"
        size={50}
        animate="true"
      />
    );
  }
  if (props.icon === "10d" || props.icon === "10n") {
    return (
      <ReactAnimatedWeather
        icon="RAIN"
        color="#7C7F81"
        size={50}
        animate="true"
      />
    );
  }
  if (
    props.icon === "09d" ||
    props.icon === "09n" ||
    props.icon === "11d" ||
    props.icon === "11n"
  ) {
    return (
      <ReactAnimatedWeather
        icon="SLEET"
        color="#7C7F81"
        size={50}
        animate="true"
      />
    );
  }
  if (props.icon === "13d" || props.icon === "13n") {
    return (
      <ReactAnimatedWeather
        icon="SNOW"
        color="#7C7F81"
        size={50}
        animate="true"
      />
    );
  }
  if (props.icon === "50d" || props.icon === "50n") {
    return (
      <ReactAnimatedWeather
        icon="FOG"
        color="#7C7F81"
        size={50}
        animate="true"
      />
    );
  }
}
