// Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.

const handleString = () => {
  const userString = document.getElementById("userString").value;

  if (userString.length < 10) {
    document.getElementById("result").innerHTML = userString;
    return;
  }

  const innerChars = userString.substring(4, 10);

  if (innerChars === "Script") {
    const firstChars = userString.substring(0, 4);
    const lastChars = userString.substring(10);
    const newString = firstChars + lastChars;

    document.getElementById("result").innerHTML = newString;
  } else {
    document.getElementById("result").innerHTML = userString;
  }
};
