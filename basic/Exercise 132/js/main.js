// Write a JavaScript program to find all distinct prime factors of a given integer.

const handleInteger = () => {
  let userInt = Number(document.getElementById("userInt").value);

  let primeFactors = [];

  for (let i = 2; i <= userInt; i++) {
    if (userInt % i === 0) {
      primeFactors.push(i);
      userInt /= i;
    }
  }

  document.getElementById("result").innerHTML = `[${primeFactors}]`;
};
