// Write a JavaScript program to check from two given integers whether one of them is 15 or their sum or difference is 15.

const handleIntegers = () => {
  const intOne = Number(document.getElementById("intOne").value);
  const intTwo = Number(document.getElementById("intTwo").value);

  if (!Number.isInteger(intOne) || !Number.isInteger(intTwo)) {
    document.getElementById("result").innerHTML =
      "Please enter a valid integer.";
    return;
  }

  if (intOne === 0 || intTwo === 0) {
    document.getElementById("result").innerHTML =
      "Please enter a non-zero integer.";
    return;
  }

  if (intOne === 15 || intTwo === 15) {
    document.getElementById("result").innerHTML =
      "One of the integers is an 15.";
    return;
  }

  if (intOne + intTwo === 15) {
    document.getElementById("result").innerHTML =
      "The sum of your integers equals 15.";
    return;
  }

  if (intOne - intTwo === 15 || intTwo - intOne === 15) {
    document.getElementById("result").innerHTML =
      "The difference between your integers is 15.";
    return;
  }

  document.getElementById("result").innerHTML =
    "Neither integer is 15, nor are the sum or difference 15.";
};
