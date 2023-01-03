// Write a JavaScript program to sort the strings of a given array of strings in the order of increasing lengths.

const handleArrays = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);
  const array = createArray(arrayLength);
  const sortedArray = mergeSort(array);

  document.getElementById("result").innerHTML = `<p>[${array}]</p><p>[${sortedArray}]`;
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

const mergeSort = (unsortedArray) => {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  const middle = Math.floor(unsortedArray.length / 2);

  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex].length < right[rightIndex].length) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
};
