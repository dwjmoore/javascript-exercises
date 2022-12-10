// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

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

  if (intOne === 8 || intTwo === 8) {
    document.getElementById("result").innerHTML =
      "One of the integers is an 8.";
    return;
  }

  if (intOne + intTwo === 8) {
    document.getElementById("result").innerHTML =
      "The sum of your integers equals 8.";
    return;
  }

  if (intOne - intTwo === 8 || intTwo - intOne === 8) {
    document.getElementById("result").innerHTML =
      "The difference between your integers is 8.";
    return;
  }

  document.getElementById("result").innerHTML =
    "Neither integer is 8, nor are the sum or difference 8.";
};
