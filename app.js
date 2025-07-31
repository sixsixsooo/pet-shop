"use strict";
let a = { a: 1 };
let b = { b: 2 };

let users = new WeakMap([
  [a, 1],
  [b, 2],
]);
a = null;
console.log(users);

let cacsh = new WeakMap();

function getValue(obj) {
  if (!cacsh.has(obj)) {
    const result = 1;
    cacsh.set(obj, result);
  }
  return cacsh.get(obj);
}

const res = getValue(b);
console.log(res);

const res2 = getValue(b);
console.log(res2);
