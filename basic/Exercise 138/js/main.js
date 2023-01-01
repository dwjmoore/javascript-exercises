// Write a JavaScript program to reverse the bits of a given 16 bits unsigned short integer.

const handleInteger = () => {
  let userInt = Number(document.getElementById("userInt").value);

  let binary16Bit = []

  while (userInt) {
    binary16Bit.unshift(userInt % 2);
    userInt = Math.floor(userInt / 2);
  }

  while (binary16Bit.length < 16) {
    binary16Bit.unshift(0);
  }

  let binary16BitReversed = [];

  for (let i = binary16Bit.length - 1; i >= 0; i--){
    binary16BitReversed.push(binary16Bit[i]);
  }

  let sum = 0;
  let n = 1;

  for (let i = binary16BitReversed.length - 1; i >= 0; i--) {
    sum += binary16BitReversed[i]*n;
    n *= 2; 
  }

  document.getElementById("result").innerHTML = `[${binary16Bit}] => [${binary16BitReversed}] => ${sum}`;
};
