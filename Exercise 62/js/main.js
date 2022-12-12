// Write a JavaScript program to move last three character to the start of a given string.

const handleString = () => {
  const stringOne = document.getElementById("stringOne").value;

  if (stringOne.length < 4) {
    document.getElementById("result").innerHTML =
      "Please enter a string with at least 4 characters";
    return;
  }

  const newString =
    stringOne.substring(stringOne.length - 3) +
    stringOne.substring(0, stringOne.length - 3);

  document.getElementById("result").innerHTML = newString;
};
