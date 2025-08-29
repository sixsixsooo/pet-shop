"use strict";

class User {
  role = "User";

  getUser() {
    return this.role;
  }
}

class Admin {
  role = ["User", "Admin"];

  getUser() {
    return this.role.join(", ");
  }
}

function logRole(role) {
  console.log("Role: " + role.getUser().toUpperCase());
}

logRole(new User());
logRole(new Admin());
