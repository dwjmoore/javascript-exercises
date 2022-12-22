// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

const handleNumbers = () => {
  const numOne = Number(document.getElementById("numOne").value);
  const numTwo = Number(document.getElementById("numTwo").value);
  const numThree = Number(document.getElementById("numThree").value);

  if (
    !Number.isInteger(numOne) ||
    !Number.isInteger(numTwo) ||
    !Number.isInteger(numThree)
  ) {
    document.getElementById("result").innerHTML = "Please enter integers.";
    return;
  }

  if (numOne < 0 || numTwo < 0 || numThree < 0) {
    document.getElementById("result").innerHTML =
      "Please enter positive numbers.";
    return;
  }

  const lastDigitOne = numOne % 10;
  const lastDigitTwo = numTwo % 10;
  const lastDigitThree = numThree % 10;

  if (lastDigitOne === lastDigitTwo && lastDigitTwo === lastDigitThree) {
    document.getElementById("result").innerHTML =
      "All three numbers have the same last digit.";
  } else if (
    lastDigitOne === lastDigitTwo ||
    lastDigitOne === lastDigitThree ||
    lastDigitTwo === lastDigitThree
  ) {
    document.getElementById("result").innerHTML =
      "Two of the numbers have the same last digit.";
  } else {
    document.getElementById("result").innerHTML =
      "None of the last digits are the same.";
  }
};
