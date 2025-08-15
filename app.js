"use strict";

const task = {
  title: "task1",
  date: new Date("2025/1/1"),

  get isOverdue() {
    return this.date;
  },

  set isOverdue(date) {
    if (task.date != date) {
      this.date = new Date();
    }
  },
};

task.isOverdue = "2025/7/1";
console.log(task);

class Task {
  constructor(title, dateTask) {
    this.title = title;
    this.date = dateTask;
  }

  get isOverdue() {
    return this.dateTask < new Date();
  }

  set dueDate(date) {
    if (date < new Date()) {
      return;
    }
    this._date = date;
  }
}

const task1 = new Task("Js", new Date());

console.log((task1.dueDate = new Date("2025/8/15")));
