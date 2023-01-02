// Write a JavaScript program to simplify a given absolute path for a file in Unix-style.

const handleArrays = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);

  const arrayOne = createArray(arrayLength);
  const arrayTwo = createArray(arrayLength);

  let count = 0;

  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      if (arrayOne[i] === arrayTwo[j]) {
        count += 1;
      }
    }
  }

  document.getElementById("result").innerHTML = `<p>[${arrayOne}]</p><p>[${arrayTwo}]</p><p>${count}</p>`;
};

const createArray = (length) => {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.ceil(Math.random() * 10));
  }
  return array;
}