const multiply = () => {
  const numberOne = Number(document.getElementById("numberOne").value);
  const numberTwo = Number(document.getElementById("numberTwo").value);

  const result = numberOne * numberTwo;

  document.getElementById("result").innerHTML = result;
};

const divide = () => {
  const numberOne = Number(document.getElementById("numberOne").value);
  const numberTwo = Number(document.getElementById("numberTwo").value);

  const result = numberOne / numberTwo;

  document.getElementById("result").innerHTML = result;
};
