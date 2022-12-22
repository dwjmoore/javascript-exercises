// Write a JavaScript program to test whether an array of integers of length n contains 1 or a 3.

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
    randomNum = Math.floor(Math.random() * 11);
    array.push(randomNum);
  }

  let hasOneOrThree;

  array.includes(1) || array.includes(3)
    ? (hasOneOrThree = true)
    : (hasOneOrThree = false);

  document.getElementById(
    "result"
  ).innerHTML = `<p>Array: ${array}</p><p>${hasOneOrThree}</p>`;
};
