const getDifference = () => {
  const userNum = Number(document.getElementById("userNum").value);

  let result;

  if (userNum <= 15) {
    result = 19 - userNum;
  } else {
    result = (userNum - 19) * 3;
  }

  document.getElementById("result").innerHTML = `The result is ${result}.`;
};
