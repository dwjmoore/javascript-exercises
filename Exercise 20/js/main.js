const checkInt = () => {
  const intOne = Number(document.getElementById("intOne").value);
  const intTwo = Number(document.getElementById("intTwo").value);

  if (intOne === 0 || intTwo === 0) {
    document.getElementById("message").innerHTML =
      "Both integers must be a non-zero value.";
    return;
  }

  if (intOne > 0 && intTwo > 0) {
    document.getElementById("message").innerHTML = "Both integers are postive.";
    return;
  }

  if (intOne < 0 && intTwo < 0) {
    document.getElementById("message").innerHTML =
      "Both integers are negative.";
    return;
  }

  if (intOne > 0 && intTwo < 0) {
    document.getElementById("message").innerHTML =
      "The first integer is positive and the second integer is negative.";
    return;
  }

  if (intOne < 0 && intTwo > 0) {
    document.getElementById("message").innerHTML =
      "The first integer is negative and the second integer is postive.";
    return;
  }
};
