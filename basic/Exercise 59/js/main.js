// Write a JavaScript program to extract the first half of a string of even length.

const handleString = () => {
  const userString = document.getElementById("userString").value;

  if (userString.length % 2 !== 0) {
    document.getElementById("result").innerHTML =
      "Please enter a string with an even number of characters.";
    return;
  }

  const numChars = userString.length / 2;

  const newString = userString.substring(0, numChars);

  document.getElementById("result").innerHTML = newString;
};
