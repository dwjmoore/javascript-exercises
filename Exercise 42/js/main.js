// Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.  Go to the editor
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

const handleNumbers = () => {
  const numOne = Number(document.getElementById("numOne").value);
  const numTwo = Number(document.getElementById("numTwo").value);
  const numThree = Number(document.getElementById("numThree").value);

  if (numOne === 0 || numTwo === 0 || numThree === 0) {
    document.getElementById("result").innerHTML = "Enter non-zero numbers.";
    return;
  }

  if (!numOne || !numTwo || !numThree) {
    document.getElementById("result").innerHTML =
      "Please enter numbers in each field.";
    return;
  }

  if (numOne >= numThree) {
    document.getElementById("result").innerHTML =
      "The numbers are not increasing.";
    return;
  }

  if (numOne < numTwo && numTwo < numThree) {
    document.getElementById("result").innerHTML =
      "The numbers are increasing in Strict Mode.";
  } else {
    document.getElementById("result").innerHTML =
      "The numbers are increasing in Soft Mode.";
  }
};
