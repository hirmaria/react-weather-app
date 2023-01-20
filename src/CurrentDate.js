export default function CurrentDate() {
  let newDate = new Date();
  let hour = newDate.getHours();
  let minute = newDate.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[newDate.getDay()];

  if (hour < 10 && minute < 10) {
    if (minute < 10) {
      return `${day}, 0${hour}:0${minute}`;
    } else {
      return `${day}, 0${hour}:${minute}`;
    }
  } else {
    if (minute < 10) {
      return `${day}, ${hour}:0${minute}`;
    } else {
      return `${day}, ${hour}:${minute}`;
    }
  }
}
