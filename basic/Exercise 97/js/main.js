// Write a JavaScript program to find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it.

const handleString = () => {
  const userString = document.getElementById("userString").value;

  const buildPalindrome = (string) => {
    let flag;
    for (let i = string.length; ; i++) {
      flag = true;
      for (let j = 0; j < i - j - 1; j++) {
        if (i - j - 1 < string.length && string[j] != string[i - j - 1]) {
          flag = false;
          break;
        }
      }
      if (flag) {
        for (let j = string.length; j < i; j++) {
          string += string[i - j - 1];
        }
        return string;
      }
    }
  }

  document.getElementById("result").innerHTML = buildPalindrome(userString);
};
