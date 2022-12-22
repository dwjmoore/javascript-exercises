// Write a JavaScript program to find the maximal number from a given positive integer by deleting exactly one digit of the given number.

const handleInteger = () => {
  let userInt = Number(document.getElementById("userInt").value);

  if (!Number.isInteger(userInt) || userInt < 10) {
    document.getElementById("result").innerHTML =
      "Please enter an integer greater than 9.";
    return;
  }

  let maxValue = 0;
  const intDigitsArray = [];

  while (userInt) {
    intDigitsArray.unshift(userInt % 10);
    userInt = Math.floor(userInt / 10);
  }

  for (let i = 0; i < intDigitsArray.length; i++) {
    let tmpArray1 = intDigitsArray.slice(0, i);
    let tmpArray2 = intDigitsArray.slice(i + 1);
    let frontValueString = tmpArray1.join("");
    let backValueString = tmpArray2.join("");
    let tmpValue = Number(frontValueString + backValueString);

    if (tmpValue > maxValue) {
      maxValue = tmpValue;
    }
  }

  document.getElementById("result").innerHTML = maxValue;
};
