const checkYear = () => {
  const year = Number(document.getElementById("year").value);

  const leapYear = year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

  if (leapYear) {
    document.getElementById(
      "answer"
    ).innerHTML = `The year ${year} is a leap year.`;
  } else {
    document.getElementById(
      "answer"
    ).innerHTML = `The year ${year} is not a leap year.`;
  }
};

/*
Step-1 : If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
Step-2 : If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
Step-3 : If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
Step-4 : The year is a leap year (it has 366 days).
Step-5 : The year is not a leap year (it has 365 days).
*/
