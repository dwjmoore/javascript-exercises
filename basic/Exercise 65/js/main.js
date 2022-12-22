// Write a JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6.

const handleString = () => {
  const stringOne = document.getElementById("stringOne").value;
  let hasScript;

  if (stringOne.length < 6) {
    document.getElementById("result").innerHTML =
      "Please enter a string with at least 6 characters.";
    return;
  }

  const newString = stringOne.substring(stringOne.length - 6);

  newString === "Script" ? (hasScript = true) : (hasScript = false);

  document.getElementById("result").innerHTML = hasScript;
};
