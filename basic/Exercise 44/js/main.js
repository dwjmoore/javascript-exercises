// Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.

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

  if (numOne < 20 && numTwo < 20 && numThree < 20) {
    document.getElementById("result").innerHTML =
      "All integers are less than 20.";
    return;
  }

  if (numOne >= 20 && (numOne < numTwo || numOne < numThree)) {
    document.getElementById("result").innerHTML =
      "One of the numbers is equal or greater than 20 and less than one of the other numbers.";
    return;
  }

  if (numTwo >= 20 && (numTwo < numOne || numTwo < numThree)) {
    document.getElementById("result").innerHTML =
      "One of the numbers is equal or greater than 20 and less than one of the other numbers.";
    return;
  }

  if (numThree >= 20 && (numThree < numTwo || numThree < numOne)) {
    document.getElementById("result").innerHTML =
      "One of the numbers is equal or greater than 20 and less than one of the other numbers.";
    return;
  }
};
