// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.

const handleNumbers = () => {
  const numOne = Number(document.getElementById("numOne").value);
  const numTwo = Number(document.getElementById("numTwo").value);

  if ((numOne >= 50 && numOne <= 99) || (numTwo >= 50 && numTwo <= 99)) {
    document.getElementById("result").innerHTML = true;
  } else {
    document.getElementById("result").innerHTML = false;
  }
};
