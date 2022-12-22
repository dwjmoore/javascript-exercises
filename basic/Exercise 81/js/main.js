// Write a JavaScript program to add two digits of a given positive integer of length two.

const handleNumber = () => {
  const userNum = Number(document.getElementById("userNum").value);

  if (userNum < 10 || userNum > 99) {
    document.getElementById("result").innerHTML =
      "Please enter a positive 2-digit number.";
    return;
  }

  const digitOne = Math.floor(userNum / 10);
  const digitTwo = userNum % 10;

  const sum = digitOne + digitTwo;

  document.getElementById("result").innerHTML = `Sum: ${sum}`;
};
