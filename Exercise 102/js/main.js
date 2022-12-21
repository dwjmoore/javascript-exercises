// Write a JavaScript program to find the number of inversions of a given array of integers. Two elements of the array are stored at positions i and j form an inversion if a[i] > a[j] and i < j.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);

  if (!Number.isInteger(arrayLength)) {
    document.getElementById("result").innerHTML = "Please enter an integer.";
    return;
  }

  if (arrayLength < 2) {
    document.getElementById("result").innerHTML =
      "Array length must be at least 2.";
    return;
  }

  const array = createArray(arrayLength);

  let numInversions = 0;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        numInversions += 1;
      }
    }
  }

  document.getElementById(
    "result"
  ).innerHTML = `<p>Array: ${array}</p><p># of Inversions: ${numInversions}</p>`;
};

const createArray = (length) => {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.ceil(Math.random() * 10));
  }
  return array;
};
