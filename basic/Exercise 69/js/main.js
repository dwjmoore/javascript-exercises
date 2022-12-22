// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

const handleNumbers = () => {
  const numbers = [
    Number(document.getElementById("numOne").value),
    Number(document.getElementById("numTwo").value),
    Number(document.getElementById("numThree").value),
  ];

  let sum = 0;

  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  document.getElementById("result").innerHTML = sum;
};
