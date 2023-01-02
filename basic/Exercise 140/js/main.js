// Write a JavaScript program to check whether all the digits in a given number are the same or not.

const handleInteger = () => {
  let userInt = Number(document.getElementById("userInt").value);

  let userIntArray = [];

  while (userInt) {
    userIntArray.unshift(userInt % 10);
    userInt = Math.floor(userInt / 10);
  }

  for (let i = 1; i < userIntArray.length; i++) {
    if (userIntArray[i] !== userIntArray[i - 1]) {
      document.getElementById("result").innerHTML =
        "All digits are not the same.";
      return;
    }
  }

  document.getElementById("result").innerHTML = "All digits are the same.";
};
