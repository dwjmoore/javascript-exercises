// Write a JavaScript program to reverse a given string.

const handleString = () => {
  const userString = document.getElementById("userString").value;

  const userStringArray = userString.split("");
  const reverseArray = userStringArray.reverse();
  const newString = reverseArray.join("");

  document.getElementById("result").innerHTML = newString;
};
