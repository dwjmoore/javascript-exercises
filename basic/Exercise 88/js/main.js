// Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and it does not divide either, then two given integers are similar. Check whether two given integers are similar or not.

const handleIntegers = () => {
  const intOne = Number(document.getElementById("intOne").value);
  const intTwo = Number(document.getElementById("intTwo").value);
  const divisor = Number(document.getElementById("divisor").value);

  if (intOne < 0 || intTwo < 0) {
    document.getElementById("result").innerHTML = "Please enter positive integers.";
    return;
  }

  if (!(divisor < intOne && divisor < intTwo)) {
    document.getElementById("result").innerHTML = "The divisor must be less than both integers.";
    return;
  }

  let areSimilar = false;

  if (intOne % divisor === 0 && intTwo % divisor === 0) {
    areSimilar = true;
  }

  document.getElementById("result").innerHTML = areSimilar;
}