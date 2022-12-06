const getArea = () => {
  const sideOne = Number(document.getElementById("sideOne").value);
  const sideTwo = Number(document.getElementById("sideTwo").value);
  const sideThree = Number(document.getElementById("sideThree").value);

  const s = (sideOne + sideTwo + sideThree) / 2;
  const area = Math.sqrt(s * ((s - sideOne) * (s - sideTwo) * (s - sideThree)));

  document.getElementById(
    "area"
  ).innerHTML = `The area of the triangle is ${area}`;

  return;
};
