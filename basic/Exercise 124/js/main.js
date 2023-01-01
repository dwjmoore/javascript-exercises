// Write a JavaScript program to create the value of NOR of two given booleans.

const handleBoolean = () => {
  let p;
  let q;

  document.getElementById("p").value === "true" ? (p = true) : (p = false);
  document.getElementById("q").value === "true" ? (q = true) : (q = false);

  !p && !q
    ? (document.getElementById("result").innerHTML = true)
    : (document.getElementById("result").innerHTML = false);
};
