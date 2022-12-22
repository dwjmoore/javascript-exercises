// Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.

const handleIntegers = () => {
  const userIntOne = Number(document.getElementById("userIntOne").value);
  const userIntTwo = Number(document.getElementById("userIntTwo").value);

  if (!Number.isInteger(userIntOne) || !Number.isInteger(userIntTwo)) {
    document.getElementById("result").innerHTML =
      "Please enter an integer in each field.";
    return;
  }

  if (!Number.isInteger(userIntOne / userIntTwo)) {
    document.getElementById(
      "result"
    ).innerHTML = `The result of ${userIntOne} divided by ${userIntTwo} is not an integer.`;
    return;
  }

  document.getElementById(
    "result"
  ).innerHTML = `The result of ${userIntOne} divided by ${userIntTwo} is ${
    userIntOne / userIntTwo
  }`;
};
