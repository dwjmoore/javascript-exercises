// Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.

const handleNumbers = () => {
  const numOne = Number(document.getElementById("numOne").value);
  const numTwo = Number(document.getElementById("numTwo").value);
  const userResult = Number(document.getElementById("userResult").value);

  if (
    Number.isNaN(numOne) ||
    Number.isNaN(numTwo) ||
    Number.isNaN(userResult)
  ) {
    document.getElementById("result").innerHTML =
      "Please enter a number in each field.";
    return;
  }

  let correctExpression = false;
  let add;
  let subtract;
  let multiply;
  let divide;

  if (numOne + numTwo === userResult) {
    correctExpression = true;
    add = `${numOne} + ${numTwo} = ${userResult}`;
  }

  if (numOne - numTwo === userResult) {
    correctExpression = true;
    subtract = `${numOne} - ${numTwo} = ${userResult}`;
  }

  if (numOne * numTwo === userResult) {
    correctExpression = true;
    multiply = `${numOne} * ${numTwo} = ${userResult}`;
  }

  if (numOne / numTwo === userResult) {
    correctExpression = true;
    divide = `${numOne} / ${numTwo} = ${userResult}`;
  }

  document.getElementById("result").innerHTML = correctExpression;

  if (add) {
    document.getElementById("resultAdd").innerHTML = add;
  }

  if (subtract) {
    document.getElementById("resultSubtract").innerHTML = subtract;
  }

  if (multiply) {
    document.getElementById("resultMultiply").innerHTML = multiply;
  }

  if (divide) {
    document.getElementById("resultDivide").innerHTML = divide;
  }
};
