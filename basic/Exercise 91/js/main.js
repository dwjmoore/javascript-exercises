// Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);
  const k = Number(document.getElementById("k").value);

  if (!Number.isInteger(arrayLength) || !Number.isInteger(k)) {
    document.getElementById("result").innerHTML =
      "Please enter an integer for the array length and k.";
    return;
  }

  if (arrayLength < 2) {
    document.getElementById("result").innerHTML =
      "The array length must be at least 2.";
    return;
  }

  if (k < 2) {
    document.getElementById("result").innerHTML =
      "The k value must be at least 2.";
    return;
  }

  let array = [];

  for (let i = 0; i < arrayLength; i++) {
    let randomNumber = Math.ceil(Math.random() * 100);
    array.push(randomNumber);
  }

  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < i + k; j++) {
      tempSum += array[j];
    }
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
    tempSum = 0;
  }

  document.getElementById(
    "result"
  ).innerHTML = `<p>${array}</p><p>${maxSum}</p>`;
};
