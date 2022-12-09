// Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.

const handleString = () => {
  const userString = document.getElementById("userString").value;

  if (userString.length < 2) {
    document.getElementById("result").innerHTML =
      "Enter a string with a length of at least 2.";
    return;
  }

  const middleChars = userString.substring(1, userString.length - 1);
  const firstChar = userString.charAt(0);
  const lastChar = userString.charAt(userString.length - 1);

  const newString = lastChar + middleChars + firstChar;

  document.getElementById("result").innerHTML = newString;
};
