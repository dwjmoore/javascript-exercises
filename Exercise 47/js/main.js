// Write a JavaScript program to check whether a given number is presents in the range 40..10000. For example 40 presents in 40 and 4000

const handleNumber = () => {
  const num = Number(document.getElementById("num").value);

  if (num < 40 || num > 1000) {
    document.getElementById("result").innerHTML = true;
  } else {
    document.getElementById("result").innerHTML = false;
  }
};
