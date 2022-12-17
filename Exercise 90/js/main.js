// Write a JavaScript program to find the kth greatest element of a given array of integers

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);
  const k = Number(document.getElementById("k").value);

  if (!Number.isInteger(arrayLength) || !Number.isInteger(k)) {
    document.getElementById("result").innerHTML =
      "Please enter an integer for the array length and k.";
    return;
  }

  if (arrayLength < 3) {
    document.getElementById("result").innerHTML =
      "The array length must be at least 3.";
    return;
  }

  let originalArray = [];

  for (let i = 0; i < arrayLength; i++) {
    let randomNumber = Math.ceil(Math.random() * 100);
    originalArray.push(randomNumber);
  }

  let sortedArray = [];

  for (let i = 0; i < originalArray.length; i++) {
    sortedArray.push(originalArray[i]);
  }

  let tmp;

  for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < arrayLength; j++) {
      if (sortedArray[j] < sortedArray[j + 1]) {
        tmp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = tmp;
      }
    }
  }

  const kthGreatestNumber = sortedArray[k-1];

  document.getElementById(
    "result"
  ).innerHTML = `<p>${originalArray}</p><p>${sortedArray}</p><p>${kthGreatestNumber}</p>`;
};
