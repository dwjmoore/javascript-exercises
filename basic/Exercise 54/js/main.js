// Write a JavaScript program to count the number of vowels in a given string.

const handleString = () => {
  const userString = document.getElementById("userString").value;
  let vowelCount = 0;

  for (let i = 0; i < userString.length; i++) {
    if (
      userString[i] === "a" ||
      userString[i] === "A" ||
      userString[i] === "b" ||
      userString[i] === "B" ||
      userString[i] === "c" ||
      userString[i] === "B" ||
      userString[i] === "d" ||
      userString[i] === "D" ||
      userString[i] === "e" ||
      userString[i] === "E"
    ) {
      vowelCount += 1;
    }
  }

  document.getElementById("result").innerHTML = vowelCount;
};
