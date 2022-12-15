// Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.

const handleArrays = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);

  if (arrayLength < 1) {
    document.getElementById("result").innerHTML =
      "Array must have at least 1 element.";
    return;
  }

  if (!Number.isInteger(arrayLength)) {
    document.getElementById("result").innerHTML = "Array must be an integer.";
    return;
  }

  const arrayOne = createArray(arrayLength);
  const arrayTwo = createArray(arrayLength);
  let elementMatch = false;

  for (let i = 0; i < arrayLength; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      elementMatch = true;
      break;
    }
  }

  document.getElementById(
    "result"
  ).innerHTML = `<p>${arrayOne}</p><p>${arrayTwo}</p><p>${elementMatch}</p>`;
};

const createArray = (length) => {
  let array = [];
  for (let i = 0; i < length; i++) {
    let randomNumber = Math.ceil(Math.random() * 10);
    array.push(randomNumber);
  }
  return array;
};
