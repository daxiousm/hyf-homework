let toDo = ["gym", "football", "coding", "reading"];
let myName;
const helloCommand = "hello my name is";
let num1;
let num2;

function getReply(command) {
  if (command.indexOf(helloCommand) === 0) {
    myName = command.slice(helloCommand.length + 1);
    return "nice to meet you " + myName;
  } else if (command === "what is your name") {
    return "your name is " + myName;
  } else if (command === "add fishing to my to do") {
    toDo.push("fishing");
    console.log(toDo);
  } else if (command === "remove fishing from my to do") {
    const toRemoveToDo = toDo.indexOf("fishing");
    if (toRemoveToDo > -1) {
      toDo.splice(toRemoveToDo, 4);
    }
    console.log(toDo);
    return "Removed fishing from your todo";
  } else if (command === "What is on my todo?") {
    let toDoLength = toDo.length;
    return;
    "you have " + toDoLength + " todos - gym,football,coding and reading";
  } else if (command === "What day is it today?") {
    let d = new Date();
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    console.log(weekday[d.getDay()]);
    console.log(
      d.getDate() + " of " + month[d.getMonth()] + " " + d.getFullYear()
    );
  } else if (command === "Set a timer for 4 minutes") {
    let myfunc = setInterval(function () {
      console.log("timer is done");
    }, 240000);
    return "timer is set for 4 min";
  } else if (command === "what is 3 + 3") {
    num1 = 3;
    num2 = 3;
    return num1 + num2;
  } else if (command === "what is 4 * 12") {
    num1 = 3;
    num2 = 3;
    return num1 * num2;
  } else {
    return "i am not getting what u r saying could you please repeat again";
  }
  return;
}

console.log(getReply("hello my name is dax"));
console.loggetReply("what is your name");
console.loggetReply("add fishing to my to do");
console.loggetReply("remove fishing from my to do");
console.loggetReply("What is on my todo?");
console.loggetReply("What day is it today?");
console.loggetReply("Set a timer for 4 minutes");
console.loggetReply("what is 3 + 3");
console.log(getReply("what is 4 * 12"));
