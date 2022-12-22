// Write a JavaScript program to create the dot products of two given 3D vectors.

const handleDotProduct = () => {
  const array1 = createArray();
  const array2 = createArray();

  let result = 0;

  for (let i = 0; i < 3; i++) {
    result += array1[i] * array2[i];
  }

  document.getElementById(
    "result"
  ).innerHTML = `<p>${array1}</p><p>${array2}</p><p>${result}</p>`;
};

const createArray = () => {
  const array = [];
  for (let i = 0; i < 3; i++) {
    let randomNumber = Math.ceil(Math.random() * 10);
    let chooseNegOrPos = Math.ceil(Math.random() * 2);
    chooseNegOrPos === 2 ? (randomNumber *= 1) : (randomNumber *= -1);
    array.push(randomNumber);
  }
  return array;
};
