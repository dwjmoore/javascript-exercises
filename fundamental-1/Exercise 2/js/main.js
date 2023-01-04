// Write a JavaScript program to copy a string to the clipboard.

const handleString = () => {
  const userString = document.getElementById("userString").value;

  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(userString);
    document.getElementById("result").innerHTML = "String copied to clipboard.";
    return;
  }

  document.getElementById("result").innerHTML = "The Clipboard API is not available.";
  Promise.reject("The Clipboard API is not available.");
};
