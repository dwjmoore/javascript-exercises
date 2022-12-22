// Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1.

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
    randomNum = Math.floor(Math.random() * 101);
    array.push(randomNum);
  }

  const newArray = [array[0], array[arrayLength - 1]];

  document.getElementById(
    "result"
  ).innerHTML = `<p>Original Array: ${array}</p><p>New Array: ${newArray}</p>`;
};
