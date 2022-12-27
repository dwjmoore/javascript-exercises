// Write a JavaScript program to check a number from three given numbers where two numbers are equal, find the third one.

const handleEvenNumbers = () => {
  array = createArray(3);

  if (array[0] !== array[1] && array[1] !== array[2]) {
    document.getElementById("result").innerHTML =
      "All the elements are unique.";
    return;
  }

  if (array[0] === array[1]) {
    document.getElementById("result").innerHTML = `<p>${array}</p>`;
  } else if (array[0] === array[2]) {
    document.getElementById("result").innerHTML = `<p>${array}</p>`;
  } else if (array[1] === array[2]) {
    document.getElementById("result").innerHTML = `<p>${array}</p>`;
  }
};

const createArray = (length) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.ceil(Math.random() * 5));
  }
  return array;
};
