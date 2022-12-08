const getDifference = () => {
  const userNum = Number(document.getElementById("userNum").value);

  let result;

  if (userNum <= 15) {
    result = 15 - userNum;
  } else {
    result = (userNum - 15) * 2;
  }

  document.getElementById("result").innerHTML = `The result is ${result}.`;
};
