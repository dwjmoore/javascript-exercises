// Write a JavaScript program to change the capitalization of all letters in a given string.

const handleString = () => {
  const stringLength = Number(document.getElementById("stringLength").value);
  let string = createString(stringLength);
  let tempString = "";
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    tempString = string[i];
    if (tempString.charCodeAt(0) >= 65 && tempString.charCodeAt(0) <= 90) {
      newString += tempString.toLowerCase();
    }
    if (tempString.charCodeAt(0) >= 97 && tempString.charCodeAt(0) <= 122) {
      newString += tempString.toUpperCase();
    }
  }

  document.getElementById("result").innerHTML = `<p>${string}</p><p>${newString}</p>`;
};

const createString = (length) => {
  let string = "";
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < length; i++) {
    string += chars[Math.floor(Math.random() * 52)];
  }
  return string;
};
