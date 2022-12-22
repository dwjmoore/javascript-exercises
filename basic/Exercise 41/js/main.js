// Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

const handleNumbers = () => {
  const numOne = Number(document.getElementById("numOne").value);
  const numTwo = Number(document.getElementById("numTwo").value);
  const numThree = Number(document.getElementById("numThree").value);

  if (numOne === 0 || numTwo === 0 || numThree === 0) {
    document.getElementById("result").innerHTML = "Enter non-zero numbers.";
    return;
  }

  if (!numOne || !numTwo || !numThree) {
    document.getElementById("result").innerHTML =
      "Please enter numbers in each field.";
    return;
  }

  if (numOne === numTwo && numTwo === numThree) {
    document.getElementById("result").innerHTML = 30;
  } else if (numOne === numTwo || numOne === numThree || numTwo === numThree) {
    document.getElementById("result").innerHTML = 40;
  } else {
    document.getElementById("result").innerHTML = 20;
  }
};
