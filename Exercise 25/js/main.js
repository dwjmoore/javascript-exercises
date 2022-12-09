// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

const handleNumber = () => {
  const userNumber = Number(document.getElementById("userNumber").value);

  if (userNumber < 0) {
    document.getElementById("result").innerHTML = "Enter a positive number.";
    return;
  }

  if (userNumber % 3 === 0 && userNumber % 7 === 0) {
    document.getElementById("result").innerHTML =
      "Your number is divisible by 3 and 7.";
  } else if (userNumber % 3 === 0) {
    document.getElementById("result").innerHTML =
      "Your number is divisible by 3.";
  } else if (userNumber % 7 === 0) {
    document.getElementById("result").innerHTML =
      "Your number is divisible by 7.";
  } else {
    document.getElementById("result").innerHTML =
      "Your number is not divisble by 3 or 7.";
  }
};
