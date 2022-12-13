// Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each odd length n.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);

  if (arrayLength % 2 === 0) {
    document.getElementById("result").innerHTML =
      "The array length must be an odd number";
    return;
  }

  let arrayOne = [];
  let arrayTwo = [];
  let randomNumOne;
  let randomNumTwo;

  for (i = 1; i <= arrayLength; i++) {
    randomNumOne = Math.floor(Math.random() * 101);
    randomNumTwo = Math.floor(Math.random() * 101);
    arrayOne.push(randomNumOne);
    arrayTwo.push(randomNumTwo);
  }

  const middleElement = Math.floor(arrayLength / 2);

  const newArray = [arrayOne[middleElement], arrayTwo[middleElement]];

  document.getElementById(
    "result"
  ).innerHTML = `<p>Original Array 1: ${arrayOne}</p><p>Original Array 2: ${arrayTwo}</p><p>New Array: ${newArray}</p>`;
};
