"use strict";

const products = new Map([
  ["Pig", 2020],
  ["Cat", 2025],
  ["Dog", 200000],
]);

console.log(products);

const cards = {
  profile: 1,
  header: 2,
  footer: 3,
  main: 4,
};

console.log(Object.entries(cards));
const cardsInfo = new Map(Object.entries(cards));
console.log(cardsInfo);

console.log(cardsInfo.size);

const categories = new Map([
  ["Products", true],
  ["Ballance", 1000],
  ["Loves", "Cat"],
]);
console.log(categories);

const users = {
  1: "Antony",
  2: "Anjelly",
};

const usersWork = new Map(Object.entries(users));

console.log(usersWork);

console.log(usersWork.size);
