// Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.

const handlePrimeNumbers = () => {
  const userInt = Number(document.getElementById("userInt").value);

  if (!Number.isInteger(userInt) || userInt < 1) {
    document.getElementById("result").innerHTML =
      "Please enter an integer of 1 or greater.";
    return;
  }

  const primeNumbers = [2];

  for (let i = 3; i <= userInt; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        break;
      }
      if (j === i - 1) {
        primeNumbers.push(i);
      }
    }
  }

  document.getElementById("result").innerHTML = primeNumbers;
};
