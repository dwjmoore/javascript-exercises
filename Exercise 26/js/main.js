// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.

const handleString = () => {
  const userString = document.getElementById("userString").value;

  if (userString.length < 3) {
    document.getElementById("result").innerHTML =
      "Enter a string with at least 3 characters.";
    return;
  }

  const lastThreeChars = userString.substring(userString.length - 3);

  const result = lastThreeChars + userString + lastThreeChars;

  document.getElementById("result").innerHTML = result;
};
