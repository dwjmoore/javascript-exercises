// Write a JavaScript program to check whether it is possible to rearrange characters of a given string in such way that it will become equal to another given string. 

const handleString = () => {
  const stringLength = Number(document.getElementById("stringLength").value);

  if (!Number.isInteger(stringLength)) {
    document.getElementById("result").innerHTML =
      "Please enter an integer for the string length.";
    return;
  }

  let stringOne = createString(stringLength);
  let stringTwo = createString(stringLength);

  let stringOneArray = stringOne.split('');
  let stringTwoArray = stringTwo.split('');

  let stringsMatch = true;

  stringOneArray.sort();
  stringTwoArray.sort();

  for (let i = 0; i < stringLength; i++) {
    if (stringOneArray[i] !== stringTwoArray[i]) {
      stringsMatch = false;
      break;
    }
  }

  document.getElementById("result").innerHTML = `<p>${stringOne}</p><p>${stringTwo}</p><p>${stringsMatch}</p>`;
};

const createString = (length) => {
  const charBank = "abcdefghijklmnopqrstuvwxyz";

  let string = "";

  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * 26);
    string += charBank[randomNumber];
  }

  return string;
};
