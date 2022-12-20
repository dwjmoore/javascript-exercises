// Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.

const handleString = () => {
  const stringLength = Number(document.getElementById("stringLength").value);

  if (!Number.isInteger(stringLength) || stringLength < 0) {
    document.getElementById("result").innerHTML =
      "Please enter a positive integer for the array length.";
    return;
  }

  let string = createString(stringLength);

  let onlyLatin = true;

  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    if (charCode < 65 || (charCode > 90 && charCode < 97) || charCode > 122) {
      onlyLatin = false;
    }
  }

  let noConsecutiveCase = true;

  for (let i = 0; i < string.length - 1; i++) {
    let charCode = string.charCodeAt(i);
    let adjacentCharCode = string.charCodeAt(i + 1);

    if (
      charCode >= 65 &&
      charCode <= 90 &&
      adjacentCharCode >= 65 &&
      adjacentCharCode <= 90
    ) {
      noConsecutiveCase = false;
    }
    if (
      charCode >= 97 &&
      charCode <= 122 &&
      adjacentCharCode >= 97 &&
      adjacentCharCode <= 122
    ) {
      noConsecutiveCase = false;
    }
  }

  let meetsParams;

  onlyLatin && noConsecutiveCase ? (meetsParams = true) : (meetsParams = false);

  document.getElementById(
    "result"
  ).innerHTML = `<p>${string}</p><p>${meetsParams}</p>`;
};

const createString = (length) => {
  const charBank =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()+=1234567890";

  let string = "";

  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * charBank.length);
    string += charBank[randomNumber];
  }

  return string;
};
