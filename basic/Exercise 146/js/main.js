// Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.

const handleInteger = () => {
  const userInt = Number(document.getElementById("userInt").value);

  let sum = 0;

  for (let i = 1; i <= userInt; i++) {
    sum += i * i * i;
  }

  document.getElementById("result").innerHTML = sum;
};
