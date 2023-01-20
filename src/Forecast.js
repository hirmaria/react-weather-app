import axios from "axios";
import { useState } from "react";

export default function Forecast(props) {
  let n = null;
  let apiKey = `a430c6edc9fe0fc648fcee0ce7ca3848`;
  let url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${props.city}&cnt=7&appid=${apiKey}&units=metric`;
  let [maxtemp, setMaxtemp] = useState(null);
  let [mintemp, setMintemp] = useState(null);

  function getForecast(response, index) {
    setMaxtemp(Math.round(response.data.main.temp_max));
    setMintemp(Math.round(response.data.main.temp_min));
  }

  axios(url).then(getForecast);

  return console.log(url);
  //`${maxtemp} ${mintemp}`;
}
