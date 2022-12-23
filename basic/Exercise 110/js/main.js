// Write a JavaScript program to find the number of even values in a sequence before the chosen index of an array of length 10. The index value starts at 0.

const handleEvenNumbers = () => {
  const userIndex = Number(document.getElementById("userIndex").value);

  if (!Number.isInteger(userIndex) || userIndex > 9 || userIndex < 0) {
    document.getElementById("result").innerHTML =
      "Please enter an index value as an integer from 0 to 9.";
  }

  array = createArray(10);

  let evensCounter = 0;

  for (let i = 0; i < userIndex; i++) {
    if (array[i] % 2 === 0) {
      evensCounter += 1;
    }
  }

  document.getElementById("result").innerHTML = `<p>${array}</p><p>${evensCounter}</p>`
};

const createArray = (length) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.ceil(Math.random() * 100));
  }
  return array;
};
