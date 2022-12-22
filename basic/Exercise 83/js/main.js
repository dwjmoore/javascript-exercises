// Write a JavaScript to find the longest string from a given array of strings.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);

  if (arrayLength < 2) {
    document.getElementById("result").innerHTML =
      "Array length must be at least 2.";
    return;
  }

  if (!Number.isInteger(arrayLength)) {
    document.getElementById("result").innerHTML =
      "Array length must be an integer.";
    return;
  }

  let array = [];

  for (let i = 0; i < arrayLength; i++) {
    let string = createString();
    array.push(string);
  }

  let longestString = "";

  for (let i = 0; i < arrayLength; i++) {
    if (array[i].length > longestString.length) {
      longestString = array[i];
    }
  }

  document.getElementById(
    "result"
  ).innerHTML = `<p>${array}</p><p>${longestString}</p>`;
};

const createString = () => {
  const chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let stringArray = [];
  let randomChar;

  const randomStringLength = Math.ceil(Math.random() * 10);

  for (let i = 1; i < randomStringLength; i++) {
    randomChar = chars[Math.floor(Math.random() * chars.length)];
    stringArray.push(randomChar);
  }

  const string = stringArray.join("");

  return string;
};
