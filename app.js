"use strict";

function orderReadyTimer(ms) {
  const endTime = new Date().getTime() + ms;

  const timerInterval = setInterval(() => {
    console.log(
      new Intl.DateTimeFormat("ru-RU", {
        minute: "numeric",
        second: "numeric",
      }).format(endTime + 100 - new Date())
    );
  }, 1000);

  setTimeout(() => {
    clearInterval(timerInterval);
    console.log("Order is ready!");
  }, ms);
}

console.log(orderReadyTimer(10000));
