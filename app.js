// "use strict";

// class User {
//   #login;
//   #password;
//   constructor(login, password) {
//     this.#login = login;
//     this.setPassword(password);
//   }

//   #encryptPassword(password) {
//     return password.slice("").reverse().join("");
//   }

//   setPassword(password) {
//     this.#password = this.#encryptPassword(password);
//   }

//   checkPassword(password) {
//     this.#password === this.#encryptPassword(password);
//   }

//   changePassword(oldPassword, newPassword) {
//     if (this.checkPassword(oldPassword)) {
//       this.setPassword(newPassword);
//       console.log("Your password was changed!!");
//     } else {
//       ("It's was not old password!");
//     }
//   }
//   changeLogin(newLogin) {
//     this.#login = newLogin;
//   }
// }

// const user1 = new User("Lampach", "qwerty");

// user1.login = "lampach";
// console.log(user1.login);

// console.log(user1.checkPassword());

"use strict";

const User = {
  loging() {
    console.log("log");
  },
};

const user = Object.create(User);
user.loging();
console.log(user);

console.log(user.__proto__ == User);

const Book = function (title, author) {
  this.title = title;
  this.author = author;
};

Book.prototype.buy = function () {
  console.log("buy fanction");
};

const AudioBook = function (title, author, lenght) {
  Book.call(this, title, author);
  this.lenght = length;
};

AudioBook.prototype = Object.create(Book.prototype);

AudioBook.prototype.loging = function () {
  console.log(`${this.title} - ${this.author}`);
};

const book = new AudioBook("Tororo", "Club hunting", 3);

book.loging();
book.buy();
console.log(book);
