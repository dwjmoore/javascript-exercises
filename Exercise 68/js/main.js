// Write a JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to 2 times n.

const handleString = () => {
  const stringOne = document.getElementById("stringOne").value;
  const nChars = Number(document.getElementById("nChars").value);

  if (stringOne.length < 2 * nChars) {
    document.getElementById("result").innerHTML =
      "Please enter a string with a length at least 2 times the n value.";
    return;
  }

  const subStringOne = stringOne.substring(0, nChars);
  const subStringTwo = stringOne.substring(stringOne.length - nChars);

  const newString = subStringOne + subStringTwo;

  document.getElementById("result").innerHTML = newString;
};
