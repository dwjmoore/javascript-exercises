// Write a JavaScript program to check whether a given matrix is lower triangular or not.

const handleMatrix = () => {
  const line1a = Number(document.getElementById("line1a").value);
  const line1b = Number(document.getElementById("line1b").value);
  const line1c = Number(document.getElementById("line1c").value);

  const line2a = Number(document.getElementById("line2a").value);
  const line2b = Number(document.getElementById("line2b").value);
  const line2c = Number(document.getElementById("line2c").value);

  const line3a = Number(document.getElementById("line3a").value);
  const line3b = Number(document.getElementById("line3b").value);
  const line3c = Number(document.getElementById("line3c").value);

  const matrix = [
    [line1a, line1b, line1c],
    [line2a, line2b, line2c],
    [line3a, line3b, line3c],
  ];

  let isLowerTriangular = true;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (j > i && matrix[i][j] !== 0) {
        isLowerTriangular = false;
        document.getElementById("result").innerHTML = isLowerTriangular;
        return;
      }
    }
  }

  document.getElementById("result").innerHTML = isLowerTriangular;
};
