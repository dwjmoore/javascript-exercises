// Write a JavaScript program to get the largest even number from an array of integers.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);

  const array = createArray(arrayLength);

  let largestEvenNum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && array[i] > largestEvenNum) {
      largestEvenNum = array[i];
    }
  }

  document.getElementById(
    "result"
  ).innerHTML = `The largest even number in [${array}] is ${largestEvenNum}.`;
};

const createArray = (length) => {
  let array = [];

  for (let i = 0; i < length; i++) {
    array.push(Math.ceil(Math.random() * 100));
  }

  return array;
};
