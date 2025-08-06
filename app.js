"use strict";

const date = new Date();

const options = {
  hour: "numeric",
  minutes: "numeric",
  month: "long",
};

console.log(new Intl.DateTimeFormat("ru-RU", options).format(date));

console.log(navigator.language);
console.log(new Intl.DateTimeFormat(navigator, options).format(date));
