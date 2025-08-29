"use stict";

class Treasure {
  price = 0;
}

class Crystal extends Treasure {
  price = 100;
}

class Coin extends Treasure {
  price = 10;
}

class Inventory {
  #money = 0;
  pickIt(treasure) {
    if (treasure instanceof Crystal) {
      this.#money += treasure.price;
    }
    if (treasure instanceof Coin) {
      this.#money += treasure.price;
    }
  }

  get eMoney() {
    return this.#money;
  }
}

const inventory = new Inventory();
const crystal = new Crystal();
const coin = new Coin();

inventory.pickIt(coin);
console.log(inventory.eMoney);
