// Write a JavaScript program to check whether there is at least one element which occurs in two given sorted arrays of integers.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);

  if (!Number.isInteger(arrayLength) || arrayLength < 0) {
    document.getElementById("result").innerHTML =
      "Please enter a positive integer for the array length.";
    return;
  }

  let arrayOne = createArray(arrayLength);
  let arrayTwo = createArray(arrayLength);

  let elementMatch = false;

  for (i = 0; i < arrayOne.length; i++) {
    for (j = i; j < arrayTwo.length; j++) {
      if (arrayOne[i] === arrayTwo[j]) {
        elementMatch = true;
      }
    }
  }

  document.getElementById(
    "result"
  ).innerHTML = `<p>${arrayOne}</p><p>${arrayTwo}</p><p>${elementMatch}</p>`;
};

const createArray = (length) => {
  let array = [];

  for (let i = 0; i < length; i++) {
    array.push(Math.ceil(Math.random() * 10));
  }

  return array;
};
