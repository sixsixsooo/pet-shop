"use strict";

class Test {
  static a = 100;

  static hello() {
    console.log("hello");
  }

  static {
    let b = 10000;
    this.a = 10;
  }
}

Test.hello();

console.log(Test.a);
