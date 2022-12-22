// Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.

const handleString = () => {
  const stringOne = document.getElementById("stringOne").value;
  const stringTwo = document.getElementById("stringTwo").value;
  let newString;
  let lengthDifference;

  if (stringOne.length === stringTwo.length) {
    newString = stringOne + stringTwo;
    document.getElementById("result").innerHTML = newString;
    return;
  }

  if (stringOne.length > stringTwo.length) {
    lengthDifference = stringOne.length - stringTwo.length;
    newString =
      stringOne.substring(0, stringOne.length - lengthDifference) + stringTwo;
    document.getElementById("result").innerHTML = newString;
    return;
  }

  if (stringTwo.length > stringOne.length) {
    lengthDifference = stringTwo.length - stringOne.length;
    newString =
      stringTwo.substring(0, stringTwo.length - lengthDifference) + stringOne;
    document.getElementById("result").innerHTML = newString;
    return;
  }
};
