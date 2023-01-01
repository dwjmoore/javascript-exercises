// Write a JavaScript program to find the smallest prime number strictly greater than a given number.

const handleInteger = () => {
  const userInt = Number(document.getElementById("userInt").value);

  let nextPrime = userInt;

  while (true) {
    nextPrime += 1;
    let isPrime = true;

    for (let i = 2; i < nextPrime; i++) {
      if (nextPrime % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      document.getElementById("result").innerHTML = nextPrime;
      return;
    }
  }
};
