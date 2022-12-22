const today = new Date();

const day = today.getDay();
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const dayOfTheWeek = days[day];

const month = today.getMonth();
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const monthOfTheYear = months[month];

const date = today.getDate();
const year = today.getFullYear();

const hour = today.getHours()
const hourOfTheDay = (hour > 12) ? (hour - 12) : (hour);
const minute = today.getMinutes();
const minuteOfTheDay = (minute < 10) ? ("0" + String(minute)) : minute;
const meridiem = (hour > 11) ? "PM" : "AM";

document.getElementById("date").innerHTML = `Today is ${dayOfTheWeek}, ${monthOfTheYear} ${date}, ${year}.`;
document.getElementById("time").innerHTML = `The time is ${hourOfTheDay}:${minuteOfTheDay} ${meridiem}.`;