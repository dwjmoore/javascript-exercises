// Write a JavaScript program to find the number of times to replace a given number with the sum of its digits until it convert to a single digit number.

const handleNumber = () => {
  let userInt = Number(document.getElementById("userInt").value);

  if (userInt < 10) {
    document.getElementById("result").innerHTML =
      "Please enter a value of 10 or greater.";
    return;
  }

  if (!Number.isInteger(userInt)) {
    document.getElementById("result").innerHTML = "Please enter an integer.";
    return;
  }

  let counter = 0;
  let sum;

  do {
    let intDigitsArray = [];
    sum = 0;

    while (userInt) {
      intDigitsArray.unshift(userInt % 10);
      userInt = Math.floor(userInt / 10);
    }

    console.log(intDigitsArray);

    for (i = 0; i < intDigitsArray.length; i++) {
      sum += intDigitsArray[i];
    }

    userInt = sum;

    counter += 1;

  } while (sum > 9);

  document.getElementById(
    "result"
  ).innerHTML = `<p>Counter: ${counter}</p><p>Final Sum: ${sum}</p>`;
};
