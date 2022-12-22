// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

const handleString = () => {
  const stringOne = document.getElementById("stringOne").value;

  const subString = stringOne.substring(0, 3);

  subString === "Los" || subString === "New"
    ? (document.getElementById("result").innerHTML = stringOne)
    : (document.getElementById("result").innerHTML = "");
};
