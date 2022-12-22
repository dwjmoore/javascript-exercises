// Write a JavaScript program to concatenate two strings except their first character.

const handleString = () => {
  const stringOne = document.getElementById("stringOne").value;
  const stringTwo = document.getElementById("stringTwo").value;

  if (stringOne.length < 2 || stringTwo.length < 2) {
    document.getElementById("result").innerHTML =
      "Please enter strings with at least 2 characters";
    return;
  }



  const newString = stringOne.substring(1) + stringTwo.substring(1);

  document.getElementById("result").innerHTML = newString;
};
