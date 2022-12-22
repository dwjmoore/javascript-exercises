// Write a JavaScript program to find the number of sorted pairs formed by its elements of a given array of integers such that one element in the pair is divisible by the other one.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);

  if (!Number.isInteger(arrayLength) || arrayLength < 2) {
    document.getElementById("result").innerHTML =
      "Please enter an integer with a value of 2 or greater.";
    return;
  }

  const array = createArray(arrayLength);

  let counter = 0;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] % array[j] === 0 || array[j] % array[i] === 0) {
        counter += 1;
      }
    }
  }

  document.getElementById(
    "result"
  ).innerHTML = `<p>${array}</p><p>${counter}</p>`;
};

const createArray = (length) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.ceil(Math.random() * 10));
  }
  return array;
};
