"use strict";

const users = new Map([
  [1, "Eugeniy"],
  [2, "Til"],
  [3, "Rick"],
]);

for (const entry of users) {
  console.log(entry);
}

for (const [key, value] of users) {
  console.log(key);
  console.log(value);
}
for (const [key, value] of users) {
  console.log(key, value);
}

console.log([...users]);

console.log([...users.keys()]);

console.log([...users.values()]);
