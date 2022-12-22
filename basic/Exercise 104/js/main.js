// Write a JavaScript program to find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer.

const handleArray = () => {
  const arrayLength = Number(document.getElementById("arrayLength").value);
  const userInt = Number(document.getElementById("userInt").value);

  if (arrayLength < 2 || !Number.isInteger(arrayLength)) {
    document.getElementById("result").innerHTML =
      "Please enter an integer of 2 or greater for the array length.";
    return;
  }

  if (userInt < 0 || !Number.isInteger(userInt)) {
    document.getElementById("result").innerHTML =
      "Please enter a positive integer.";
    return;
  }

  const array = createArray(arrayLength);
  let tmpIntDifference;
  let minIntDifference = 9999;
  let element1;
  let element2;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let tmpElementDifference = Math.abs(array[i] - array[j]);

      if (tmpElementDifference <= userInt) {
        tmpIntDifference = Math.abs(userInt - tmpElementDifference);
        if (tmpIntDifference < minIntDifference) {
          minIntDifference = tmpIntDifference;
          element1 = array[i];
          element2 = array[j];
        }
      }
    }
  }

  if (minIntDifference === 9999) {
    document.getElementById("result").innerHTML =
      "No elements could be found to fit the parameters.";
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `<p>${array}</p><p>Element #1: ${element1}</p><p>Element #2: ${element2}</p>`;
  }
};

const createArray = (length) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.ceil(Math.random() * 100));
  }
  return array;
};
