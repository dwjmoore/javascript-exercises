// Write a JavaScript program to reverse the elements of a given array of integers length n.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);
  let array = [];
  let randomNum;

  for (i = 1; i <= arrayLength; i++) {
    randomNum = Math.floor(Math.random() * 11);
    array.push(randomNum);
  }

  document.getElementById(
    "result"
  ).innerHTML = `<p>Original Array: ${array}</p><p>Reversed Array: ${array.reverse()}</p>`;
};
