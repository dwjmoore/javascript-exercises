const checkYear = () => {
  const year = Number(document.getElementById("year").value);

  const date = new Date(year, 0, 1);
  const day = date.getDay();

  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayOfTheWeek = daysOfTheWeek[day];

  document.getElementById(
    "janOneDayOfWeek"
  ).innerHTML = `January 1 is a ${dayOfTheWeek} in ${year}.`;
};

const checkNewYearDay = () => {
  let years = [];

  for (let year = 2022; year <= 2100; year++) {
    const date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
      years.push(year);
    }
  }

  document.getElementById("janOneOnSundays").innerHTML = years;
};
