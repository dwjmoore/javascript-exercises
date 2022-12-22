// Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.

const handleString = () => {
  const userString = document.getElementById("userString").value;
  const userChar = document.getElementById("userChar").value;

  if (userString.length < 5) {
    document.getElementById("result").innerHTML =
      "Enter a string with a length of at least 5 characters.";
    return;
  }

  stringChars = userString.substring(2, 5);

  stringChars.includes(userChar)
    ? (document.getElementById(
        "result"
      ).innerHTML = `The character ${userChar} exists in that section of the string.`)
    : (document.getElementById(
        "result"
      ).innerHTML = `The character ${userChar} does not exist in that section of the string.`);
};
