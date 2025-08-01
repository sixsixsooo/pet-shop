"use strict";

console.log(Math.cbrt(27));

console.log(Math.sqrt(4));

console.log(4 ** (1 / 2));
console.log(27 ** (1 / 3));

console.log(2 ** 3);

console.log(Math.max(9, 0, -1, -100, 20, 1000, true, "10"));
console.log(Math.min(9, 0, -1, -100, 20, 1000, true, "10"));

let chisla = [9, 0, -1, -100, 20, 1000, true, "10"];

console.log(Math.max(chisla));
console.log(Math.max(...chisla));

console.log(Math.round(10.122));
console.log(Math.round(10.566));

console.log(Math.ceil(10.1));
console.log(Math.floor(10.1));
console.log(Math.trunc(10.1));
console.log(Math.trunc(10.80009909));

console.log((400.199).toFixed(1));
console.log(Number((400.199).toFixed(1)));

function randomNumber(num) {
  num = Math.round(Math.random() * 20 + 1); // Better be write 21 cuz it's more faster and optimized
  console.log(num);
}
randomNumber();

function randomNumberBetter(num) {
  num = Math.round(Math.random() * 20 + 1); // Better be write 21 cuz it's more faster and optimized
  return num;
}
console.log(randomNumberBetter());

function randomNumberBetterAll(min, max) {
  const num = Math.round(Math.random() * (max - min + 1) + min);
  return num;
}
console.log(randomNumberBetter(1, 20));
