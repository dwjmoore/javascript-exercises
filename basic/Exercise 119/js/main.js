// Write a JavaScript program to check whether a given integer has an increasing digits sequence.

const handleInteger = () => {
  let userInt = Number(document.getElementById("userInt").value);

  let digitsArray = [];

  while (userInt) {
    digitsArray.unshift(userInt % 10);
    userInt = Math.floor(userInt / 10);
  }

  let increasingDigits = true;

  for (let i = 1; i < digitsArray.length; i++) {

    if (digitsArray[i] <= digitsArray[i - 1]) {
      increasingDigits = false;
      document.getElementById("result").innerHTML = increasingDigits;
      return;
    }
  }

  document.getElementById("result").innerHTML = increasingDigits;
};
