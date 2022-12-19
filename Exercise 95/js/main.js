// Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.

const handleArray = () => {
  const intToReplace = Number(document.getElementById("intToReplace").value);
  const intReplacement = Number(
    document.getElementById("intReplacement").value
  );

  const array = [8, 5, 3, 3, 2, 8, 1, 5, 3, 9];

  if (array.indexOf(intToReplace) === -1) {
    document.getElementById("result").innerHTML =
      "Please choose an integer to replace that is in the array.";
    return;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === intToReplace) {
      array[i] = intReplacement;
    }
  }

  document.getElementById("result").innerHTML = array;
};
