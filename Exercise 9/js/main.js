const checkDaysToChristmas = () => {
  const today = new Date();
  const xmas = new Date(today.getFullYear(), 11, 25);

  if (today.getMonth() === 11 && today.getDay() > 25) {
    xmas.setFullYear(xmas.getFullYear() + 1);
  }

  const oneDay = 1000 * 60 * 60 * 24;

  const daysToXmas = Math.ceil((xmas.getTime() - today.getTime()) / oneDay);

  document.getElementById("daysToChristmas").innerHTML = daysToXmas;
};
