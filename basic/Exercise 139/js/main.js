// Write a JavaScript program to find the position of a rightmost round number in an array of integers. Returns 0 if there are no round number.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);

  const array = createArray(arrayLength);

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 10 === 0) {
      document.getElementById("result").innerHTML = `[${array}] => ${array[i]}`;
      return;
    }
  }

  document.getElementById("result").innerHTML = `[${array}] => 0`;
};

const createArray = (length) => {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.ceil(Math.random() * 100));
  }
  return array;
};
