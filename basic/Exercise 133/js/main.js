// Write a JavaScript program to check whether a given fraction is proper or not.

const handleFraction = () => {
  const numerator = Number(document.getElementById("numerator").value);
  const denominator = Number(document.getElementById("denominator").value);

  Math.abs(numerator / denominator) < 1
    ? (document.getElementById("result").innerHTML = "Proper Fraction")
    : (document.getElementById("result").innerHTML = "Improper Fraction");
};
