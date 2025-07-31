"use strict";

const foodPrices = new Map();

foodPrices.set("Cat", 100);
console.log(foodPrices.set("Dog", 200));

foodPrices.set("Bird", 50).set("Crokodile", 400);

console.log(foodPrices);
console.log(foodPrices.has("Cat"));

console.log(foodPrices.get("Crokodile"));

console.log(foodPrices.delete("Bird"));
console.log(foodPrices);

console.log(foodPrices.clear());
console.log(foodPrices);

const first = { a: 1 };

foodPrices.set("Pig", 10000).set("Povodoc", 1000000).set(first, { b: 2 });
console.log(foodPrices.get(first));
console.log(foodPrices);

console.log(foodPrices.size);
