// Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);
  let array = [];
  let randomNum;
  let isEqual;

  for (i = 1; i <= arrayLength; i++) {
    randomNum = Math.floor(Math.random() * 11);
    array.push(randomNum);
  }

  array[0] === array[array.length - 1] ? (isEqual = true) : (isEqual = false);

  document.getElementById(
    "result"
  ).innerHTML = `<p>${array}</p><p>${isEqual}</p>`;
};
