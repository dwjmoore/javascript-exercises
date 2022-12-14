// Write a JavaScript program to test whether a given array of integers contains 1 and 5 twice.

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

  let has1 = 0;
  let has5 = 0;
  let has1and5Twice;

  for (i = 0; i < arrayLength; i++) {
    if (array[i] === 1) {
      has1 += 1;
    }

    if (array[i] === 5) {
      has5 += 1;
    }
  }

  has1 >= 2 && has5 >= 2 ? (has1and5Twice = true) : (has1and5Twice = false);

  document.getElementById(
    "result"
  ).innerHTML = `<p>Array: ${array}</p><p>${has1and5Twice}</p>`;
};
