"use strict";

const date1 = new Date(6, 7, 2025);
const date2 = new Date(6, 8, 2025);

function timeBetweenDate(dateFirst, dateSecond) {
  return (dateSecond - dateFirst) / (1000 * 60 * 60 * 24);
}

console.log(timeBetweenDate(date1, date2));
