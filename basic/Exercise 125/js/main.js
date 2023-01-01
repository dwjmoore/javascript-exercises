// Write a JavaScript program to find the longest string from a given array.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);

  const array = createArray(arrayLength);

  let longestString = "";

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestString.length) {
      longestString = array[i];
    }
  }

  document.getElementById(
    "result"
  ).innerHTML = `The longest string is ${longestString}.`;
};

const createArray = (length) => {
  let array = [];
  let randomString = "";
  const chars = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < length; i++) {
    let randomStringLength = Math.ceil(Math.random() * 10);

    for (let j = 0; j < randomStringLength; j++) {
      randomString = randomString + chars[Math.floor(Math.random() * 26)];
    }
    array.push(randomString);
    randomString = "";
  }

  return array;
};
