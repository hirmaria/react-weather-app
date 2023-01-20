import axios from "axios";
import { useState } from "react";

export default function Forecast(props) {
  // let n = null;
  let apiKey = `60ed4de53det2358c47boa751cc30ef5`;
  let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
  let [maxtemp, setMaxtemp] = useState(null);
  let [mintemp, setMintemp] = useState(null);

  // function getForecast(response, index) {
  //   setMaxtemp(Math.round(response.data.main.temp_max));
  //    setMintemp(Math.round(response.data.main.temp_min));
  // }

  // axios(url).then(getForecast);

  return console.log(url);
  //`${maxtemp} ${mintemp}`;
}
