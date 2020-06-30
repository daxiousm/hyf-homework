function getEventWeekday(numberOfDaysFromToday) {
  const today = new Date(); // todays date
  const indexOfDay = today.getDay(); //to get the index of the day
  const calanderDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (numberOfDaysFromToday > 7) {
    numberOfDaysFromToday = numberOfDaysFromToday % 7;
  } else {
    numberOfDaysFromToday = 7 - numberOfDaysFromToday;
  }

  return calanderDays[numberOfDaysFromToday];
}

//testing
const testingDays = [20, 5, 26, 34, 11, 6];
for (let i = 0; i < testingDays.length; i++) {
  console.log("The event will happen after " + testingDays[i] + "day is :");
  console.log(getEventWeekday(testingDays[i]));
}
