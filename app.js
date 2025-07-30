"use strict";

const petFood = [
  "Sweet",
  "Derty",
  "Sweet",
  "Sweet",
  false,
  true,
  1,
  1,
  2,
  3,
  4,
  5,
];

const setPetFood = new Set(petFood);

console.log(setPetFood);

console.log(setPetFood.size);
console.log(setPetFood.has(1));

setPetFood.add("Jiraff");
setPetFood.delete("Sweet");
console.log(setPetFood);

for (const food of setPetFood) {
  console.log(food);
}

console.log([...setPetFood]);

console.log(new Set("cating"));

const slovo = "fishka";
let asbuka = new Set(slovo);
console.log(asbuka);

console.log(new Set([{ a: 1 }, { b: 2 }, { c: 3 }]));

const prices = [1, 2, 1, 3, 4, 5, 1, 3, 4, 1000, 10];

const sortedPrices = new Set(prices);
console.log(sortedPrices);

sortedPrices.add(20);
console.log(sortedPrices);

sortedPrices.delete(10);
console.log(sortedPrices);

console.log(sortedPrices.has(100));
console.log(sortedPrices.size);

console.log(...sortedPrices);
for (const every of sortedPrices) {
  if (every !== 1) {
    sortedPrices.add(10000);
    sortedPrices.has(1);
    console.log(every);
  }
}
