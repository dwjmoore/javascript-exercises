// Write a JavaScript program to reverse the order of the bits in a given integer.

const handleInteger = () => {
  let userInt = Number(document.getElementById("userInt").value);

  let binaryArray = [];

  while (userInt) {
    binaryArray.unshift(userInt % 2);
    userInt = Math.floor(userInt / 2);
  }

  if (binaryArray.length > 8) {
    document.getElementById("result").innerHTML = "Enter a positive integer of 255 or less.";
    return;
  }

  if (binaryArray.length < 8) {
    for (let i = 0; binaryArray.length < 8; i++) {
      binaryArray.unshift(0);
    }
  }

  let binaryArrayReversed = [];

  for (let i = binaryArray.length - 1; i >= 0; i--) {
    binaryArrayReversed.push(binaryArray[i]);
  }

  let finalInt = 0;
  let n = 1

  for (let i = binaryArrayReversed.length - 1; i >= 0; i--) {
    finalInt += binaryArrayReversed[i]*n;
    n *= 2; 
  }

  document.getElementById("result").innerHTML = `[${binaryArray}] => [${binaryArrayReversed}] => ${finalInt}`;
};
