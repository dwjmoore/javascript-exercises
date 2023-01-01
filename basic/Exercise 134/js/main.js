// Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

const handleString = () => {
  const userString = document.getElementById("userString").value;

  let newString = "";

  for (let i = 0; i < userString.length; i++) {
    let charPosition = userString.charCodeAt(i) - "a".charCodeAt(0);
    let newCharPosition = 25 - charPosition + "a".charCodeAt(0);
    newString += String.fromCharCode(newCharPosition);
  }

  document.getElementById("result").innerHTML = newString;
};
