// Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);

  if (!Number.isInteger(arrayLength)) {
    document.getElementById("result").innerHTML =
      "Please enter an integer for the array length and k.";
    return;
  }

  if (arrayLength < 2) {
    document.getElementById("result").innerHTML =
      "The array length must be at least 2.";
    return;
  }

  const array = [];

  for (let i = 0; i < arrayLength; i++) {
    let randomNumber = Math.ceil(Math.random() * 10);
    array.push(randomNumber);
  }

  let differenceSum = 0;

  for (let i = 0; i < array.length - 1; i++) {
    differenceSum += Math.abs(array[i] - array[i + 1]);
  }

  document.getElementById(
    "result"
  ).innerHTML = `<p>${array}</p><p>${differenceSum}</p>`;
};
