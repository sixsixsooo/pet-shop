"use strict";

"use strict";

const arrNmbersForEven = [2, 3, 4, 5, 6, 1, 3, 2, 0];
const arrNmbersForOdd = [2, 3, 4, 5, 6, 1, 3, 2, 0];

const isEven = (n) => n % 2 === 0;
const isOdd = (n) => n % 2 === 1;

function reserve(n) {
  return n % 2 === 0;
}

const isEvenRes = arrNmbersForEven.filter(isEven);
const isOddRes = arrNmbersForOdd.filter(isOdd);

const resEven = isEvenRes;
const resOdd = isOddRes;

console.log(resEven);
console.log(resOdd);
