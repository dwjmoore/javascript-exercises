// Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integer.

const handleNumber = () => {
  let number = Number(document.getElementById("number").value);

  if (number < 1 || !Number.isInteger(number)) {
    document.getElementById("result").innerHTML =
      "Please enter an integer of 1 or greater";
    return;
  }

  let sum = 0;

  while (number > 0) {
    sum += number;
    number = Math.floor(number / 2);
  }

  document.getElementById("result").innerHTML = sum;
};
