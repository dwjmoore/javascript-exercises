const checkNums = () => {
  const numOne = Number(document.getElementById("numOne").value);
  const numTwo = Number(document.getElementById("numTwo").value);

  let result;

  if (numOne === 50 || numTwo === 50 || numOne + numTwo === 50) {
    result = true;
  } else {
    result = false;
  }

  document.getElementById("result").innerHTML = result;
};
