"use strict";

const CatWetFeed = function (weight, taste) {
  this.weight = weight;
  this.taste = taste;
  this.isSoled = false;
};

CatWetFeed.prototype.sold = function () {
  this.isSoled = true;
};
const citicat = new CatWetFeed(100, "salmon");
citicat.sold();
console.log(citicat);
