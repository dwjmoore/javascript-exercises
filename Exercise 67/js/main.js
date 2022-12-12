// Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.

const handleString = () => {
  const stringOne = document.getElementById("stringOne").value;

  if (
    stringOne[0] === "p" ||
    stringOne[0] === "P" ||
    stringOne[stringOne.length - 1] === "p" ||
    stringOne[stringOne.length - 1] === "P"
  ) {
    const newString = stringOne.substring(1, stringOne.length - 1);
    document.getElementById("result").innerHTML = newString;
  } else {
    document.getElementById("result").innerHTML = stringOne;
  }
};
