"use strict";

class Charecter {
  #hp = 10;
  recieveDamage(damage) {
    this.#hp -= damage;
  }
}

class Inventory {
  inventory = [];
  putInInventory(item) {
    this.inventory.push(item);
  }
}

class SaveData {
  save(data) {
    localStorage.setItem("char", data);
  }
}
