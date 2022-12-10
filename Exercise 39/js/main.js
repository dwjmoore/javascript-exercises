// Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

const handleNumbers = () => {
  const numOne = Number(document.getElementById("numOne").value);
  const numTwo = Number(document.getElementById("numTwo").value);

  const sum = numOne + numTwo;

  sum >= 50 && sum <= 80
    ? (document.getElementById("result").innerHTML = 65)
    : (document.getElementById("result").innerHTML = 80);
};
