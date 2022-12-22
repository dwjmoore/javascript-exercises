// Write a JavaScript program to create a new string without the first and last character of a given string.

const handleString = () => {
  const userString = document.getElementById("userString").value;

  if (userString.length < 3) {
    document.getElementById("result").innerHTML =
      "Please enter a string with at least 3 characters";
    return;
  }

  const newString = userString.substring(1, userString.length - 1);

  document.getElementById("result").innerHTML = newString;
};
