//Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

const handleString = () => {
  const userString = document.getElementById("userString").value;

  if (userString.includes("py")) {
    document.getElementById("result").innerHTML = userString;
  } else {
    const result = "py".concat(userString);
    document.getElementById("result").innerHTML = result;
  }
};
