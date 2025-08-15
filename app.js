"use strict";

class Car {
  #vin;

  #changeSpeed() {
    console.log("Speed chenged");
  }

  speedNowa() {
    this.#changeSpeed();
  }
}

const car = new Car();

car.speedNowa();
