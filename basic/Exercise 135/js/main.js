// Write a JavaScript program to remove all characters from a given string that appear more than once.

const handleString = () => {
  const userString = document.getElementById("userString").value;

  let charCodeArray = [];

  for (let i = 0; i < userString.length; i++) {
    charCodeArray.push(userString.charCodeAt(i));
  }

  let newCharCodeArray = [];

  for (let i = 0; i < charCodeArray.length; i++) {
    if (!newCharCodeArray.includes(charCodeArray[i])) {
      newCharCodeArray.push(charCodeArray[i]);
    }
  }

  let newString = "";

  for (let i = 0; i < newCharCodeArray.length; i++) {
    newString += String.fromCharCode(newCharCodeArray[i]);
  }

  document.getElementById("result").innerHTML = newString;
};
