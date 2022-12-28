// Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3. For example "3#4".

const handleString = () => {
  const userString = document.getElementById("userString").value;

  const firstDigit = Number(userString.slice(0, 1));
  const lastDigit = Number(userString.slice(userString.length - 1));

  const initialNumber = firstDigit * 100 + lastDigit;

  let result = [];

  for (let i = 0; i <= 90; i += 10) {
    let divisbleBy3 = initialNumber + i;

    if (divisbleBy3 % 3 === 0) {
      result.push(divisbleBy3);
    }
  }

  result
    ? (document.getElementById("result").innerHTML = result)
    : (document.getElementById("result").innerHTML =
        "No value divisble by 3 could be found.");
};
