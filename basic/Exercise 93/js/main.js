// Write a JavaScript program to find the maximal difference among all possible pairs of a given array of integers.

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

  let array = [];

  for (let i = 0; i < arrayLength; i++) {
    let randomNumber = Math.ceil(Math.random() * 100);
    array.push(randomNumber);
  }

  let tempDifference = 0;
  let maxDifference = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      tempDifference = array[i] - array[j];
      if (tempDifference < 0) {
        tempDifference *= -1;
      }
      if (tempDifference > maxDifference) {
        maxDifference = tempDifference;
      }
      tempDifference = 0;
    }
  }

  document.getElementById(
    "result"
  ).innerHTML = `<p>${array}</p><p>${maxDifference}</p>`;
};
