//Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

const handleString = () => {
  const userString = document.getElementById("userString").value;
  const position = Number(document.getElementById("position").value);

  if (position + 1 > userString.length) {
    document.getElementById("result").innerHTML =
      "Enter a postion that is within the length of the string.";
    return;
  }

  const subString1 = userString.substring(0, position);
  const subString2 = userString.substring(position + 1);

  const result = subString1 + subString2;

  document.getElementById("result").innerHTML = result;
};
