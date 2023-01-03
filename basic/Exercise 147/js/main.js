// Write a JavaScript program to compute the sum of all digits that occur in a given string.

const handleString = () => {
  const stringLength = Number(document.getElementById("stringLength").value);
  const string = createString(stringLength);

  let charCode;
  let sum = 0;

  for (let i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i);
    if (charCode >= 48 && charCode <= 57) {
      sum += charCode - 48;
    }
  }

  document.getElementById("result").innerHTML = `<p>${string}</p><p>${sum}</p>`;
};

const createString = (length) => {
  const chars = "1234567890abcdefghijklmnopqrstuvwxyz";
  let string = "";
  for (let i = 0; i < length; i++) {
    string += chars[Math.floor(Math.random() * 36)];
  }
  return string;
};
