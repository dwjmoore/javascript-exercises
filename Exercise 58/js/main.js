// Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.

const handleString = () => {
  const userString = document.getElementById("userString").value;

  if (userString.length < 3) {
    document.getElementById("result").innerHTML =
      "Your string must be at least 3 characters long.";
    return;
  }

  const lastThreeChars = userString.substring(userString.length - 3);

  const newString =
    lastThreeChars + lastThreeChars + lastThreeChars + lastThreeChars;

  document.getElementById("result").innerHTML = newString;
};
