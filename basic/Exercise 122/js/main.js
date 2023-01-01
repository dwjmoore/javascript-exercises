// Write a JavaScript program to check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);

  if (!Number.isInteger(arrayLength) || arrayLength < 3) {
    document.getElementById("result").innerHTML =
      "Please enter an integer of 3 or greater.";
    return;
  }

  const array = createArray(arrayLength);

  let counter = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      counter += 1;
    }
    if (array[i] < array[i - 1]) {
      counter -= 1;
    }
  }

  if (counter === array.length - 1) {
    document.getElementById(
      "result"
    ).innerHTML = `The array [${array}] is strictly increasing.`;
    return;
  }
  if (counter * -1 === array.length - 1) {
    document.getElementById(
      "result"
    ).innerHTML = `The array [${array}] is strictly decreasing.`;
    return;
  }

  document.getElementById(
    "result"
  ).innerHTML = `The array [${array}] is neither strictly increasing or decreasing.`;
};

const createArray = (length) => {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.ceil(Math.random() * 100));
  }
  return array;
};
