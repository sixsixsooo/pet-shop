"use strict";

function convert(number, inputNumber, convertNumber) {
  const allCurencyes = [
    { name: "RUB", mult: 1 / 60 },
    { name: "USD", mult: 1 },
    { name: "EUR", mult: 1.2 },
  ];

  const input = allCurencyes.find((a) => a.name === inputNumber);
  if (!input) {
    return null;
  }

  const convert = allCurencyes.find((a) => a.name === convertNumber);
  if (!convert) {
    return null;
  }

  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: convert.name,
  }).format((number * input.mult) / convert.mult);
}

console.log(convert(1000, "RUB", "USD"));
console.log(convert(1000, "USD", "EUR"));
console.log(convert(1000, "RUB", "USD"));
console.log(convert(1000, "EUR", "RUB"));
