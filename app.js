"use strict";

const User = function (name, password, email) {
  this.name = name;
  this.password = password + "efefeve";
  this.email = email;
};

const user1 = new User("Evgeniy", "124325fjejfe", "jffjfj@gmail.com");
console.log(user1);

const user2 = new User("Evgeniy", "femimei34", "ooop@gmail.com");
console.log(user2);

console.log(user2 instanceof User);
