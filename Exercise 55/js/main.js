// Write a JavaScript program to check whether a given string contains equal number of p's and t's.

const handleString = () => {
  const userString = document.getElementById("userString").value;
  let pCount = 0;
  let tCount = 0;
  let equalPandT;

  for (let i = 0; i < userString.length; i++) {
    if (userString[i] === "p" || userString[i] === "P") {
      pCount += 1;
    }

    if (userString[i] === "t" || userString[i] === "T") {
      tCount += 1;
    }
  }

  pCount === tCount ? (equalPandT = true) : (equalPandT = false);

  document.getElementById("result").innerHTML = equalPandT;
};
