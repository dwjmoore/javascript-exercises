// Write a JavaScript program to rotate the elements left of a given array of integers of length 3.

const handleNumbers = () => {
  const array = [
    Number(document.getElementById("numOne").value),
    Number(document.getElementById("numTwo").value),
    Number(document.getElementById("numThree").value),
  ];

  const rotatedArray = [array[1], array[2], array[0]];

  document.getElementById("result").innerHTML = rotatedArray;
};
