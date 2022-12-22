// Write a JavaScript to add two positive integers without carry.

const handleIntegers = () => {
  let intOneString = document.getElementById("intOne").value;
  let intTwoString = document.getElementById("intTwo").value;

  let intOne = Number(intOneString);
  let intTwo = Number(intTwoString);

  if (!Number.isInteger(intOne) || !Number.isInteger(intTwo)) {
    document.getElementById("result").innerHTML = "Please enter integers.";
    return;
  }

  if (intOne < 0 || intTwo < 0) {
    document.getElementById("result").innerHTML =
      "Please enter positive integers.";
    return;
  }

  let result = 0;
  let numberPlace = 1;

  if (intOneString.length === intTwoString.length) {
    while (intOne > 0 && intTwo > 0) {
      result += numberPlace * ((intOne + intTwo) % 10);
      intOne = Math.floor(intOne / 10);
      intTwo = Math.floor(intTwo / 10);
      numberPlace *= 10;
    }
  }

  let frontString;
  let backString;
  let lengthDifference;

  if (intOneString.length > intTwoString.length) {
    lengthDifference = intOneString.length - intTwoString.length;
    frontString = intOneString.slice(0, lengthDifference);
    backString = intOneString.slice(lengthDifference);

    intOne = Number(backString);

    while (intOne > 0 && intTwo > 0) {
      result += numberPlace * ((intOne + intTwo) % 10);
      intOne = Math.floor(intOne / 10);
      intTwo = Math.floor(intTwo / 10);
      numberPlace *= 10;
    }

    for (i = 0; i < intTwoString.length; i++) {
      frontString = frontString + "0";
    }

    result += Number(frontString);
  }

  if (intOneString.length < intTwoString.length) {
    lengthDifference = intTwoString.length - intOneString.length;
    frontString = intTwoString.slice(0, lengthDifference);
    backString = intTwoString.slice(lengthDifference);

    intTwo = Number(backString);

    while (intOne > 0 && intTwo > 0) {
      result += numberPlace * ((intOne + intTwo) % 10);
      intOne = Math.floor(intOne / 10);
      intTwo = Math.floor(intTwo / 10);
      numberPlace *= 10;
    }

    for (i = 0; i < intOneString.length; i++) {
      frontString = frontString + "0";
    }

    result += Number(frontString);
  }

  document.getElementById("result").innerHTML = result;
};
