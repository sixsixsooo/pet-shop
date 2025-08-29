"use strict";

class Wallet {
  ballance = 0;

  add(sum) {
    this.ballance += sum;
    return this;
  }

  remove(sum) {
    this.ballance -= sum;
    return this;
  }
}

const userWallet = new Wallet();

const res = userWallet.add(10).remove(5).add(100);

console.log(res);

class Builder {
  house = {};
  addRoof() {
    this.house.roof = "Krisha";
    return this;
  }

  addFloor() {
    this.house.floor = "Floor";
    return this;
  }

  execute() {
    return this.house;
  }
}

const domyara = new Builder().addRoof().addFloor().execute();

console.log(domyara);
