// Write a JavaScript program to check whether a given number is in a given range.

const handleNumber = () => {
  const rangeStart = Number(document.getElementById("rangeStart").value);
  const number = Number(document.getElementById("number").value);
  const rangeEnd = Number(document.getElementById("rangeEnd").value);

  number >= rangeStart && number <= rangeEnd
    ? (document.getElementById("result").innerHTML = true)
    : (document.getElementById("result").innerHTML = false);
};
