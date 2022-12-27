// Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number.

const handleFactorial = () => {
  const factorial = Number(document.getElementById("factorial").value);

  if (factorial < 1 || !Number.isInteger(factorial)) {
    document.getElementById("result").innerHTML =
      "Please enter a value of 1 or greater";
    return;
  }

  let factorialResult = createFactorial(factorial);
  let factorialArray = [];

  document.getElementById(
    "result1"
  ).innerHTML = factorialResult;

  while (factorialResult) {
    factorialArray.unshift(factorialResult % 10);
    factorialResult = Math.floor(factorialResult / 10);
  }

  let numTrailingZeros = 0;

  for (let i = factorialArray.length - 1; i >= 0; i--) {
    if (factorialArray[i] === 0) {
      numTrailingZeros += 1;
    } else {
      break;
    }
  }

  document.getElementById(
    "result2"
  ).innerHTML = numTrailingZeros;
};

const createFactorial = (number) => {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};
