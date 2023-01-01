// Write a JavaScript program to find the smallest round number that is not less than a given value.

const handleInteger = () => {
  const userInt = Number(document.getElementById("userInt").value);

  let roundNumber = userInt;

  for (let i = 1; i <= 10; i++) {
    if (roundNumber % 10 === 0) {
      document.getElementById("result").innerHTML = roundNumber;
      return;
    }
    roundNumber += 1;
  }
};
