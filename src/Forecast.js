import axios from "axios";
import { useState } from "react";

export default function Forecast(props) {
  let city = props.city;
  let [maxtemp, setMaxtemp] = useState(null);
  let [mintemp, setMintemp] = useState(null);

  let apiKey = `60ed4de53det2358c47boa751cc30ef5`;
  let urlForecast = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  function getForecast(response) {
    let days = [0, 1, 2, 3, 4, 5];

    days.map(function (day) {
      setMaxtemp(Math.round(response.data.daily[day].temperature.maximum));
      setMintemp(Math.round(response.data.daily[day].temperature.minimum));
      return (
        <div className="col" key={day}>
          <span>{maxtemp}°C </span>
          <span className="op"> {mintemp}°C</span>
        </div>
      );
    });
  }

  axios(urlForecast).then(getForecast);
}
