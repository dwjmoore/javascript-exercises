// Write a JavaScript program to check whether a point lies strictly inside a given circle.

const handleCircle = () => {
  const circleX = Number(document.getElementById("circleX").value);
  const circleY = Number(document.getElementById("circleY").value);
  const radius = Number(document.getElementById("radius").value);
  const pointX = Number(document.getElementById("pointX").value);
  const pointY = Number(document.getElementById("pointY").value);

  const sideA = pointX - circleX;
  const sideB = pointY - circleY;
  const sideCSquared = sideA * sideA + sideB * sideB;

  let insideCircle;

  sideCSquared < radius * radius
    ? (insideCircle = true)
    : (insideCircle = false);

  document.getElementById("result").innerHTML = insideCircle;
};
