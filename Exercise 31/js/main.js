// Write a JavaScript program to find the largest of three given integers.

const handleNumbers = () => {
  const numOne = Number(document.getElementById("numOne").value);
  const numTwo = Number(document.getElementById("numTwo").value);
  const numThree = Number(document.getElementById("numThree").value);

  let largestNum;

  numOne > numTwo ? (largestNum = numOne) : (largestNum = numTwo);

  largestNum > numThree
    ? (document.getElementById(
        "result"
      ).innerHTML = `The largest number is ${largestNum}.`)
    : (document.getElementById(
        "result"
      ).innerHTML = `The largest number is ${numThree}.`);
};