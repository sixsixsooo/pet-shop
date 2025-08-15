"use strict";

class User {
  #login;
  #password;

  constructor(login, password) {
    this.#login = login;
    this.#setPassword(password);
  }

  #encryptPassword(password) {
    return password.split("").reverse().join("");
  }

  #setPassword(newPassword) {
    this.#password = this.#encryptPassword(newPassword);
  }

  checkPassword(password) {
    return this.#password === this.#encryptPassword(password);
  }

  changePassword(oldPassword, newPassword) {
    if (this.checkPassword(oldPassword)) {
      this.#setPassword(newPassword);
      console.log("Password was changed!");
    } else {
      console.log("Old password incorrect!");
    }
  }

  get login() {
    return this.#login;
  }
  set login(newLogin) {
    this.#login = newLogin;
  }

  changeLogin(newLogin) {
    this.login = newLogin;
    console.log(`Login change succesfull on ${this.#login}`);
  }
}

const user1 = new User("Evgeniy", "qwertyqwerty");

console.log(user1.checkPassword("qwertyqwerty"));
console.log(user1.changeLogin("EvgeniyNew"));
console.log(user1.changePassword("qwertyqwerty", "qwerty"));
