// Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.

const handleString = () => {
  const userString = document.getElementById("userString").value;
  let newString;

  if (userString.length < 5) {
    newString = userString.toUpperCase();
    document.getElementById("result").innerHTML = newString;
    return;
  }

  const firstFiveChars = userString.substring(0, 5);
  const remainingChars = userString.substring(5);

  newString = firstFiveChars.toLowerCase() + remainingChars;

  document.getElementById("result").innerHTML = newString;
}