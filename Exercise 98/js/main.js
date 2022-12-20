// Write a JavaScript program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case. For example "Write" will be write and "PHp" will be "PHP".

const handleString = () => {
  const stringLength = Number(document.getElementById("stringLength").value);

  if (stringLength < 3) {
    document.getElementById("result").innerHTML =
      "Please enter a string length of 3 or greater.";
    return;
  }

  if (stringLength % 2 === 0) {
    document.getElementById("result").innerHTML =
      "Please enter an odd number for the string length.";
    return;
  }

  if (!Number.isInteger(stringLength)) {
    document.getElementById("result").innerHTML =
      "Please enter an integer for the string length.";
    return;
  }

  let string = createString(stringLength);

  let numLowerCase = 0;
  let numUpperCase = 0;

  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      numUpperCase += 1;
    }
    if (charCode >= 97 && charCode <= 122) {
      numLowerCase += 1;
    }
  }

  let newString;

  if (numLowerCase > numUpperCase) {
    newString = string.toLowerCase();
  }

  if (numLowerCase < numUpperCase) {
    newString = string.toUpperCase();
  }

  document.getElementById("result").innerHTML = `<p>${string}</p><p>${newString}</p>`;
};

const createString = (length) => {
  const charBank = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";

  let string = "";

  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * 52);
    string += charBank[randomNumber];
  }

  return string;
};
