// Write a JavaScript program to find the number which appears most in a given array of integers.

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

  let indexCounterArray = [];

  for (let i = 0; i < arrayLength; i++) {
    indexCounterArray[i] = 0;
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] === array[j]) {
        indexCounterArray[i] += 1;
      }
    }
  }

  let modeNumberCounter = 0;

  for (let i = 0; i < indexCounterArray.length; i++) {
    if (indexCounterArray[i] > modeNumberCounter) {
      modeNumberCounter = indexCounterArray[i];
    }
  }

  const modeIndex = indexCounterArray.indexOf(modeNumberCounter);
  const mode = array[modeIndex];

  document.getElementById("result").innerHTML = `<p>${array}</p><p>${mode}</p>`;
};
