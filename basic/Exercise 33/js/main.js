// Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

const handleNumbers = () => {
  const numOne = Number(document.getElementById("numOne").value);
  const numTwo = Number(document.getElementById("numTwo").value);

  let numOneInRange;
  let numTwoInRange;

  if ((numOne >= 40 && numOne <= 60) || (numOne >= 70 && numOne <= 100)) {
    numOneInRange = true;
  } else {
    numOneInRange = false;
  }

  if ((numTwo >= 40 && numTwo <= 60) || (numTwo >= 70 && numTwo <= 100)) {
    numTwoInRange = true;
  } else {
    numTwoInRange = false;
  }

  if (numOneInRange && numTwoInRange) {
    document.getElementById("result").innerHTML =
      "Both numbers are in either range.";
  } else if (numOneInRange && !numTwoInRange) {
    document.getElementById("result").innerHTML =
      "Only the 1st number is in either range.";
  } else if (!numOneInRange && numTwoInRange) {
    document.getElementById("result").innerHTML =
      "Only the 2nd number is in either range.";
  } else {
    document.getElementById("result").innerHTML =
      "Neither number is in either range.";
  }
};
