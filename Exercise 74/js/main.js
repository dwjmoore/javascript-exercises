// Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);
  let array = [];
  let randomNum;

  for (i = 1; i <= arrayLength; i++) {
    randomNum = Math.floor(Math.random() * 101);
    array.push(randomNum);
  }

  let largestNum = 0;

  for (i = 0; i < arrayLength; i++) {
    if (array[i] > largestNum) {
      largestNum = array[i];
    }
  }

  let newArray = [];

  for (i = 0; i < arrayLength; i++) {
    newArray.push(largestNum);
  }

  document.getElementById(
    "result"
  ).innerHTML = `<p>Original Array: ${array}</p><p>New Array: ${newArray}</p>`;
};
