// Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);
  let array = [];
  let randomNum;
  let hasOne;

  for (i = 1; i <= arrayLength; i++) {
    randomNum = Math.floor(Math.random() * 11);
    array.push(randomNum);
  }

  if (array[0] === 1 || array[array.length - 1] === 1) {
    hasOne = true;
  } else {
    hasOne = false;
  }

  document.getElementById(
    "result"
  ).innerHTML = `<p>${array}</p><p>${hasOne}</p>`;
};
