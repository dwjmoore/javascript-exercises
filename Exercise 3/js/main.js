const today = new Date();

const month = today.getMonth() + 1;
const date = today.getDate();
const year = today.getFullYear();

document.getElementById("date").innerHTML = `Today's date is ${month}-${date}-${year}.`