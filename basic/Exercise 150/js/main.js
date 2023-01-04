// Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);
  let array = createArray(arrayLength);

  if (array.length % 2 !== 0) {
    document.getElementById("result1").innerHTML = "Array length must be even.";
    document.getElementById("result2").innerHTML = "";
    return;
  }

  document.getElementById("result1").innerHTML = `[${array}]`;

  for (let i = 0; i < array.length; i += 2) {
    let tmp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = tmp;
  }

  document.getElementById("result2").innerHTML = `[${array}]`;
};

const createArray = (length) => {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.ceil(Math.random() * 10));
  }
  return array;
};
