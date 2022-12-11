// Write a JavaScript program to capitalize the first letter of each word of a given string.

const handleString = () => {
  const userString = document.getElementById("userString").value;
  let userStringArray = userString.split(" ");

  for (let i = 0; i < userStringArray.length; i++) {
    userStringArray[i] =
      userStringArray[i][0].toUpperCase() + userStringArray[i].substring(1);
  }

  const newString = userStringArray.join(" ");

  document.getElementById("result").innerHTML = newString;
};
