// Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.

const handleIntegers = () => {
  const intOne = Number(document.getElementById("intOne").value);
  const intTwo = Number(document.getElementById("intTwo").value);

  if (!Number.isInteger(intOne) || !Number.isInteger(intTwo)) {
    document.getElementById("result").innerHTML =
      "Please enter a valid integer.";
    return;
  }

  if (intOne < 0 || intTwo < 0) {
    document.getElementById("result").innerHTML =
      "Please enter a positive integer.";
    return;
  }

  if (intOne % 7 === 0 && intOne % 11 === 0) {
    document.getElementById("result").innerHTML =
      "One number is a multiple of 7 and 11.";
  } else if (intTwo % 7 === 0 && intTwo % 11 === 0) {
    document.getElementById("result").innerHTML =
      "One number is a multiple of 7 and 11.";
  } else if (intOne % 7 === 0 || intOne % 11 === 0) {
    document.getElementById("result").innerHTML =
      "One number is a multiple of 7 or 11.";
  } else if (intTwo % 7 === 0 || intTwo % 11 === 0) {
    document.getElementById("result").innerHTML =
      "One number is a multiple of 7 or 11.";
  } else {
    document.getElementById("result").innerHTML =
      "No numbers are a multiple of 7 or 11.";
  }
};
