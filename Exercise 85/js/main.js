// Write a JavaScript code to divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);

  if (arrayLength < 4) {
    document.getElementById("result").innerHTML =
      "Array length must be at least 4.";
    return;
  }

  if (!Number.isInteger(arrayLength)) {
    document.getElementById("result").innerHTML =
      "Array length must be an integer.";
    return;
  }

  let initialArray = [];

  for (let i = 0; i < arrayLength; i++) {
    let randomNumber = Math.ceil(Math.random() * 100);
    initialArray.push(randomNumber);
  }

  let arrayOne = [];
  let arrayTwo = [];

  for (let i = 0; i < arrayLength; i++) {
    if (i % 2 === 0) {
      arrayOne.push(initialArray[i]);
    } else {
      arrayTwo.push(initialArray[i]);
    }
  }

  let sumArrayOne = 0;
  let sumArrayTwo = 0;

  for (let i = 0; i < arrayOne.length; i++) {
    sumArrayOne += arrayOne[i];
  }

  for (let i = 0; i < arrayTwo.length; i++) {
    sumArrayTwo += arrayTwo[i];
  }

  const finalArray = [sumArrayOne, sumArrayTwo];

  document.getElementById(
    "result"
  ).innerHTML = `<p>${initialArray}</p><p>${arrayOne}</p><p>${arrayTwo}</p><p>${finalArray}</p>`;
};
