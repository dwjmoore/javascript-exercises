// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.

const handleString = () => {
  const userString = document.getElementById("userString").value;

  if (userString.length < 4) {
    document.getElementById("result").innerHTML = false;
    return;
  }

  const firstFourChars = userString.substring(0, 4);

  if (firstFourChars === "Java") {
    document.getElementById("result").innerHTML = true;
  } else {
    document.getElementById("result").innerHTML = false;
  }
};
