// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

const handleString = () => {
  const userString = document.getElementById("userString").value;
  let userStringArray = userString.split("");

  for (let i = 0; i < userStringArray.length; i++) {
    switch (userStringArray[i]) {
      case " ":
        break;
      case "z":
        userStringArray[i] = "a";
        break;
      case "Z":
        userStringArray[i] = "A";
        break;
      default:
        userStringArray[i] = String.fromCharCode(
          userStringArray[i].charCodeAt(0) + 1
        );
    }
  }

  const newString = userStringArray.join("");

  document.getElementById("result").innerHTML = newString;
};
