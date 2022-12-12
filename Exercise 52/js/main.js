// Write a JavaScript program to convert the letters of a given string in alphabetical order.

const handleString = () => {
  const userString = document.getElementById("userString").value;

  const userStringArray = userString.split("");
  const sortedUserStringArray = userStringArray.sort();
  const newString = sortedUserStringArray.join("");

  document.getElementById("result").innerHTML = newString;
};
