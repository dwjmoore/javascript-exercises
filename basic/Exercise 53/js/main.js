// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

const handleString = () => {
  const userString = document.getElementById("userString").value;
  let abCheck;

  for (let i = 0; i < userString.length; i++) {
    if (userString[i] === "a") {
      if (userString[i + 4] === "b") {
        abCheck = true;
        break;
      } else {
        abCheck = false;
      }
    } else if (userString[i] === "b") {
      if (userString[i + 4] === "a") {
        abCheck = true;
        break;
      } else {
        abCheck = false;
      }
    } else {
      abCheck = false;
    }
  }

  document.getElementById("result").innerHTML = abCheck;
};
