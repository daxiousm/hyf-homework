const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 12,
    hours: 19,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 5,
    hours: 13,
    minutes: 0,
  },
  {
    title: "Homeland",
    days: 9,
    hours: 5,
    minutes: 0,
  },
];
let totalPercentage = 0;
const totalHours = 8409600; //total hours in 80 years

// function returns total hours for the whole series
function totalSeriesHours(movieHour) {
  let sum = 0;
  for (let i = 0; i < movieHour.length; i++) {
    sum += movieHour[i].days * 24 + movieHour[i].hours;
  }
  return sum;
}
// function returns total hours per serious
function getAllHoursPerSeries(series) {
  const totalHoursPerSeries = series.days * 24 + series.hours;
  return totalHoursPerSeries;
}
// function returns percentage of hours per series in 80 years
function percentageOfHoursPerSeries(hoursPerSeries, totalHours) {
  const result = (hoursPerSeries / totalHours) * 100;
  return result;
}
for (let i = 0; i < seriesDurations.length; i++) {
  percentage = percentageOfHoursPerSeries(
    getAllHoursPerSeries(seriesDurations[i]),
    totalHours
  );
  totalPercentage += percentage;
  console.log(`${seriesDurations[i].title} took ${percentage}% of my life `);
}
console.log(`\n In total that is ${totalPercentage}% of my life `);
