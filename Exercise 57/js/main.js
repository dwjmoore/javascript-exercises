// Write a JavaScript program to create a new string of specified copies (positive number) of a given string.

const handleString = () => {
  const userString = document.getElementById("userString").value;
  const copies = Number(document.getElementById("copies").value);

  let newString = "";

  for (let i = 1; i <= copies; i++) {
    newString += "<p>" + userString + "</p>";
  }

  document.getElementById("result").innerHTML = newString;
};
