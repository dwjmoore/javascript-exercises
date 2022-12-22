// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.

const handleString = () => {
  const stringOne = document.getElementById("stringOne").value;

  if (stringOne.length < 3) {
    document.getElementById("result").innerHTML =
      "Please enter a string with at least 3 characters.";
    return;
  }

  if (stringOne.length % 2 === 0) {
    ("Please enter a string with an odd number of characters.");
    return;
  }

  const newString = stringOne.substring(
    Math.floor(stringOne.length / 2 - 1),
    Math.floor(stringOne.length / 2 + 2)
  );

  document.getElementById("result").innerHTML = newString;
};
