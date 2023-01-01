// Write a JavaScript program to test whether a given integer is greater than 15 return the given number, otherwise return 15.

const handleInteger = () => {
  const userInt = Number(document.getElementById("userInt").value);

  userInt > 15
    ? (document.getElementById("result").innerHTML = userInt)
    : (document.getElementById("result").innerHTML = 15);
};
