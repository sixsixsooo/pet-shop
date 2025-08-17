"use strict";

class User {
  #login;
  #password;
  constructor(login, password) {
    this.#login = login;
    this.setPassword(password);
  }

  #encryptPassword(password) {
    return password.split("").reverse().join("");
  }

  setPassword(password) {
    this.#password = this.#encryptPassword(password);
  }

  checkPassword(password) {
    return this.#password === this.#encryptPassword(password);
  }

  changePassword(oldPassword, newPassword) {
    if (this.checkPassword(oldPassword)) {
      this.setPassword(newPassword);
      console.log("Your password was changed!!");
    } else {
      console.log("It's was not old password!");
    }
  }
  changeLogin(newLogin) {
    this.#login = newLogin;
  }

  get login() {
    return this.#login;
  }

  set login(login) {
    this.#login = login;
  }
}

const user1 = new User("Lampach", "qwerty");

console.log(user1.checkPassword("qwerty"));
user1.changeLogin("Artemka");

console.log(user1.login);

user1.login = "Artemka zamenen";

console.log(user1.login);
