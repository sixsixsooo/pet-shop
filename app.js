"use strict";

const product = {
  id: 1,
  name: "viscas",
  count: 44,
};

const Card = function () {
  this.products = [];
};

Card.prototype.addProduct = function (product) {
  if (this.products.find((product) => product.id === product.id)) {
    return;
  }
  this.products.push(product);
};

Card.prototype.increaseAmount = function (id) {
  this.products = this.products.map((product) => {
    if (product.id == id) {
      product.count++;
      return product;
    }
    return product;
  });
};

Card.prototype.decreaseAmount = function (id) {
  this.products = this.products
    .map((product) => {
      if (product.id == id) {
        product.count--;
        return product;
      }
      return product;
    })
    .filter((product) => product.count > 0);
};

const card = new Card();
card.addProduct(product);
console.log(card);
console.log(card.increaseAmount(1));
console.log(card.decreaseAmount(1));
