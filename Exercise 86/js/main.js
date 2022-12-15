const handleAngle = () => {
  const angle = Number(document.getElementById("angle").value);

  if (angle < 1 || angle > 180) {
    document.getElementById("result").innerHTML =
      "Angle must be 1 to 180 degrees.";
    return;
  }

  if (angle < 90) {
    document.getElementById("result").innerHTML = "Acute angle.";
    return;
  }

  if (angle === 90) {
    document.getElementById("result").innerHTML = "Right angle.";
    return;
  }

  if (angle < 180) {
    document.getElementById("result").innerHTML = "Obtuse angle.";
    return;
  }

  if (angle === 180) {
    document.getElementById("result").innerHTML = "Straight angle.";
    return;
  }
};
