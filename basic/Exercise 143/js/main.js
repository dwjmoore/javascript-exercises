// Write a JavaScript program to sort the strings of a given array of strings in the order of increasing lengths.

const handleArrays = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);

  const array = createArray(arrayLength);

  document.getElementById("result").innerHTML = `[${array}]`;
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
