// Write a JavaScript program to swap two halves of a given array of integers of even length.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);
  let array = createArray(arrayLength);

  if (array.length % 2 !== 0) {
    document.getElementById("result1").innerHTML =
      "The length of the array must be even.";
    return;
  }

  document.getElementById("result1").innerHTML = `<p>[${array}]</p>`;

  for (let i = 0; i < array.length / 2; i++) {
    let tmp = array[i];
    array[i] = array[i + array.length / 2];
    array[i + array.length / 2] = tmp;
  }

  document.getElementById("result2").innerHTML = `<p>[${array}]</p>`;
};

const createArray = (length) => {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.ceil(Math.random() * 100));
  }
  return array;
};
