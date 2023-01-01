// Write a JavaScript program to find the number of even digits in a given integer.

const handleInteger = () => {
  let userInt = Number(document.getElementById("userInt").value);

  let digitsArray = [];

  while (userInt) {
    digitsArray.unshift(userInt % 10);
    userInt = Math.floor(userInt / 10);
  }

  let numEvenDigits = 0;

  for (let i = 0; i < digitsArray.length; i++) {
    if (digitsArray[i] % 2 === 0) {
      numEvenDigits += 1;
    }
  }

  document.getElementById("result").innerHTML = numEvenDigits;
};
