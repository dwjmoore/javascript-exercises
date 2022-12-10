// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

const handleNumbers = () => {
  const numOne = Number(document.getElementById("numOne").value);
  const numTwo = Number(document.getElementById("numTwo").value);

  if (numOne === 100) {
    document.getElementById("result").innerHTML =
      "The 1st number is closest to 100.";
    return;
  }

  if (numTwo === 100) {
    document.getElementById("result").innerHTML =
      "The 2nd number is closest to 100.";
    return;
  }

  let numOneDifference;
  let numTwoDifference;

  if (numOne < 100) {
    numOneDifference = 100 - numOne;
  } else {
    numOneDifference = numOne - 100;
  }

  if (numTwo < 100) {
    numTwoDifference = 100 - numTwo;
  } else {
    numTwoDifference = numTwo - 100;
  }

  if (numOneDifference < numTwoDifference) {
    document.getElementById("result").innerHTML =
      "The 1st number is closest to 100.";
  } else {
    document.getElementById("result").innerHTML =
      "The 2nd number is closest to 100.";
  }
};
