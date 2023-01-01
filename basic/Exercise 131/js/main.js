// Write a JavaScript program to create an array of prefix sums of the given array.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);
  const array = createArray(arrayLength);

  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = 0; j <= i; j++) {
      sum += array[j];
    }
    newArray.push(sum);
  }

  document.getElementById("result").innerHTML = `[${array}] => [${newArray}]`;
};

const createArray = (length) => {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.ceil(Math.random() * 10));
  }
  return array;
};
