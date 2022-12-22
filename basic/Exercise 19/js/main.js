const checkNum = () => {
  const num = Number(document.getElementById("num").value);

  let result;

  if (num >= 80 && num <= 120) {
    result = true;
  } else if (num >= 380 && num <= 420) {
    result = true;
  } else {
    result = false;
  }

  document.getElementById("result").innerHTML = result;
};
