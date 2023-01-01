// Write a JavaScript program to replace the first digit in a string (should contains at least digit) with $ character.

const handleString = () => {
  const userString = document.getElementById("userString").value;

  let charCodeArray = [];

  for (let i = 0; i < userString.length; i++) {
    charCodeArray.push(userString.charCodeAt(i));
  }

  let newString = "";

  for (let i = 0; i < charCodeArray.length; i++) {
    if (charCodeArray[i] >= 48 && charCodeArray[i] <= 57) {
      charCodeArray[i] = 36;
      for (let j = 0; j < charCodeArray.length; j++) {
        newString += String.fromCharCode(charCodeArray[j]);
      }
      document.getElementById("result").innerHTML = newString;
      return;
    }
  }

  document.getElementById("result").innerHTML =
    "Please include a digit in the string.";
};
