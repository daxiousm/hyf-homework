// 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

const script = document.getElementsByTagName("script");
const timerFunction = () => {
  setTimeout(() => {
    console.log("called after 2.5 seconds");
  }, 2500);
};

script.onload = () => timerFunction();

//2. Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.

const timerToLogout = (delay, stringToLog) => {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay);
};

//3. Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.

const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", () => {
  timerToLogout(5000, "Called after 5 seconds ");
});

//4. planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.

const planetEarth = () => {
  console.log("Earth");
};
const planetSaturn = () => {
  console.log("Saturn");
};

const planetLogFunction = (planetLogger) => {
  planetLogger();
};
planetLogFunction(planetEarth);
planetLogFunction(planetSaturn);

//5. "Log location".

const btn = document.getElementById("location");
btn.addEventListener("click", () => {
  const location = (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log(`Your latitude is: ${lat} and your longitude is :${long}`);
  };
  navigator.geolocation.getCurrentPosition(location);
});

// 7. Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions

const runAfterDelay = (delay, callback) => {
  setTimeout(() => {
    callback(delay);
  });
};
runAfterDelay(4, () => {
  console.log("should be logged after 4 seconds");
});

// 8. Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"

const button3 = document.getElementById("dbl-click");
const outerFunction = (event) => {
  button3.addEventListener("click", innerFunction);
  setTimeout(() => {
    button3.removeEventListener("click", innerFunction);
  }, 500);
};
const innerFunction = (event) => {
  alert("double click");
};
button3.addEventListener("click", outerFunction);

// 9. jokeCreator

const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
};
const logFunnyJoke = () => {
  console.log(
    "Parallel lines have so much in common. It's a shame they will never meet"
  );
};
const logBadJoke = () => {
  console.log(
    "I broke my finger last week. on the other hand i am ok....please stop telling jokes"
  );
};
