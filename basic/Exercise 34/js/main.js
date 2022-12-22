// Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

const handleNumbers = () => {
  const numOne = Number(document.getElementById("numOne").value);
  const numTwo = Number(document.getElementById("numTwo").value);

  if (!(numOne >= 40 && numOne <= 60) || !(numTwo >= 40 && numTwo <= 60)) {
    document.getElementById("result").innerHTML =
      "One or both of the numbers are not in the required range.";
    return;
  }

  numOne > numTwo
    ? (document.getElementById("result").innerHTML =
        "The 1st number is larger.")
    : (document.getElementById("result").innerHTML =
        "The 2nd number is larger.");
};
