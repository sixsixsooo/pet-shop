"use strict";

const date1 = new Date(6, 7, 2025);
const date2 = new Date(6, 7, 2025);
const date3 = new Date(6, 8, 2025);
const date4 = new Date(6, 8, 2025);

function timeBetweenDate(dateFirst, dateSecond) {
  return (dateSecond - dateFirst) / (1000 * 60 * 60 * 24);
}

console.log(timeBetweenDate(date1, date2));

console.log(date1 > date2);
console.log(Number(date1) === Number(date2));
console.log(Number(date1) === Number(date2));
console.log(date3.getTime() == date4.getTime());
console.log(date3 == date4);

const user1 = {
  name: "Eugeniy",
  birthday: "2007/08/06",
};

function isBirthday(user) {
  const userBirthday = new Date(user.birthday);
  const nowDate = new Date();

  if (userBirthday.getMonth() !== nowDate.getMonth()) {
    return false;
  }
  if (userBirthday.getDate() !== nowDate.getDate()) {
    return false;
  }

  return true;
}

console.log(isBirthday(user1));
