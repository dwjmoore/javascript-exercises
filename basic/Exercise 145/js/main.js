// Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.

const handleURL = () => {
  const userInt = Number(document.getElementById("userInt").value);

  let sum = 0;
  let n;

  for (let i = 1; ; i++) {
    sum += i;
    if (sum > userInt) {
      sum -= i
      n = i - 1;
      document.getElementById("result").innerHTML = `<p>${sum}</p><p>${n}</p>`;
      return;
    }
  }
};
