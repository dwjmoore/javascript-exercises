// Write a JavaScript program to convert a given number to hours and minutes.

const handleNumber = () => {
  const num = Number(document.getElementById("num").value);

  const hours = Math.floor(num / 60);
  const minutes = num % 60;

  const time = hours + ":" + minutes;

  document.getElementById("result").innerHTML = time;
};
