// Write a JavaScript program to check whether the last digit of the three given positive integers is same.

const handleIntegers = () => {
  let intOne = Number(document.getElementById("intOne").value);
  let intTwo = Number(document.getElementById("intTwo").value);
  let intThree = Number(document.getElementById("intThree").value);

  if (
    !Number.isInteger(intOne) ||
    !Number.isInteger(intTwo) ||
    !Number.isInteger(intThree)
  ) {
    document.getElementById("result").innerHTML =
      "At least one of the numbers you entered is not an integer.";
    return;
  }

  if (intOne < 0) {
    intOne = intOne * -1;
  }
  if (intTwo < 0) {
    intTwo = intTwo * -1;
  }
  if (intThree < 0) {
    intThree = intThree * -1;
  }

  const lastDigit1 = intOne % 10;
  const lastDigit2 = intTwo % 10;
  const lastDigit3 = intThree % 10;

  lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3
    ? (document.getElementById("result").innerHTML =
        "The last digit of each integer match.")
    : (document.getElementById("result").innerHTML =
        "The last digits do not match.");
};
