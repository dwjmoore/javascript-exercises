const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);
  const array = createArray(arrayLength);

  const sortedArray = mergeSort(array);

  document.getElementById(
    "result"
  ).innerHTML = `<p>[${array}]</p><p>[${sortedArray}]`;
};

const createArray = (length) => {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.ceil(Math.random() * 100));
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
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
};
