const checkGuess = () => {
  const guess = Number(document.getElementById("guess").value);

  const computerNumber = Math.floor(Math.random() * 10) + 1;

  if (guess === computerNumber) {
    document.getElementById("computerNumber").innerHTML = "Good work!";
  } else {
    document.getElementById(
      "computerNumber"
    ).innerHTML = `Not a match. My number is ${computerNumber}.`;
  }
};
