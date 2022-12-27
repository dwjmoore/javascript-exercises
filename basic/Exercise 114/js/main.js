// Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered correct sentence if it starts with the capital letter and ends with a full stop (.).

const handleString = () => {
  const userString = document.getElementById("userString").value;

  let isCapitalized = false;
  let hasPeriod = false;

  if (userString.charCodeAt(0) >= 65 && userString.charCodeAt(0) <= 90) {
    isCapitalized = true;
  }

  if (userString.charCodeAt(userString.length - 1) === 46) {
    hasPeriod = true;
  }

  isCapitalized && hasPeriod
    ? (document.getElementById("result").innerHTML =
        "The string is a complete sentence")
    : (document.getElementById("result").innerHTML =
        "The string is not a complete sentence");
};
