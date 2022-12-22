// Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.

const handleNumbers = () => {
  const numOne = Number(document.getElementById("numOne").value);
  const numTwo = Number(document.getElementById("numTwo").value);

  if (numOne < 1 || numTwo < 1) {
    document.getElementById("result").innerHTML = "Both numbers must be greater than 0."
  }
}