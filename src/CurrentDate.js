import React from "react";

export default function CurrentDate() {
  let newDate = new Date();
  let hour = newDate.getHours();
  let minute = newDate.getMinutes();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[newDate.getDay()];

  if ({ hour } < 10) {
    if ({ minute } < 10) {
      return `${day}, 0${hour}:0${minute}`;
    } else {
      return `${day}, 0${hour}:${minute}`;
    }
  } else {
    return `${day}, ${hour}:${minute}`;
  }
}
