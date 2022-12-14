// Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);

  if (arrayLength < 1) {
    document.getElementById("result").innerHTML =
      "The array length must be at least 1.";
    return;
  }

  let randomNum;
  let array = [];

  for (i = 1; i <= arrayLength; i++) {
    randomNum = Math.ceil(Math.random() * 10);
    array.push(randomNum);
  }

  let newArray = [];

  newArray.push(array[arrayLength - 1]);

  for (i = 1; i < arrayLength - 1; i++) {
    newArray.push(array[i]);
  }

  newArray.push(array[0]);

  document.getElementById(
    "result"
  ).innerHTML = `<p>Original Array: ${array}</p><p>New Array: ${newArray}</p>`;
};
