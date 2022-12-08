const getFahrenheit = () => {
  const temp = Number(document.getElementById("temp").value);

  const result = ((temp * 9) / 5) + 32;

  document.getElementById("result").innerHTML = `${temp} degrees Celcius is ${result} degrees Fahrenheit.`;
};

const getCelcius = () => {
  const temp = Number(document.getElementById("temp").value);

  const result = ((temp - 32) / 9) * 5;

  document.getElementById("result").innerHTML = `${temp} degrees Fahrenheit is ${result} degrees Celcius.`;
};