// Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.

const handleString = () => {
  const userString = document.getElementById("userString").value;
  const firstChar = userString.charAt(0);

  const newString = firstChar + userString + firstChar;

  document.getElementById("result").innerHTML = newString;
};