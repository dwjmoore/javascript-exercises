// Write a JavaScript to replace each character of a given string by the next one in the English alphabet.  Go to the editor Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

const handleString = () => {
  const userString = document.getElementById("userString").value;
  let stringArray = userString.split("");

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === "z") {
      stringArray[i] = "a";
    } else if (stringArray[i] === "Z") {
      stringArray[i] = "A";
    } else if (stringArray[i] === " ") {
      stringArray[i] = " ";
    } else {
      let charCode = stringArray[i].charCodeAt(0);
      let newCharCode = charCode + 1;
      stringArray[i] = String.fromCharCode(newCharCode);
    }
  }

  const newString = stringArray.join("");

  document.getElementById("result").innerHTML = newString;
};
