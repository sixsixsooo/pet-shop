"use strict";

const optionsRus = {
  style: "currency",
  currency: "RUB",
};

const optionsUs = {
  style: "currency",
  currency: "USD",
};

const optionsProcent = {
  style: "percent",
};

const optionsSimple = {
  style: "decimal",
};

const optionsUkr = {
  style: "currency",
  currency: "UAH",
};

console.log(new Intl.NumberFormat("ru-RU", optionsRus).format(40000));
console.log(new Intl.NumberFormat("en-US", optionsUs).format(40000));
console.log(new Intl.NumberFormat("ru-RU", optionsUs).format(40000));
console.log(new Intl.NumberFormat("ru-RU", optionsProcent).format(0.4));
console.log(new Intl.NumberFormat("ru-RU", optionsSimple).format(10000));
console.log(new Intl.NumberFormat("en-UK", optionsUkr).format(1000));
