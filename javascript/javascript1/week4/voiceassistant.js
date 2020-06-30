let toDo = ["gym", "football", "coding", "reading"];
let myName;
const helloCommand = "hello my name is";

function getReply(command) {
  const commandWords = command.split(" ");
  const number1 = parseInt(commandWords[2]);
  const number2 = parseInt(commandWords[4]);
  const operation = commandWords[3];
  if (command.indexOf(helloCommand) === 0) {
    myName = command.slice(helloCommand.length + 1);
    return "nice to meet you " + myName;
  } else if (command === "what is your name") {
    return "your name is " + myName;
  } else if (command.startsWith("add") && command.endsWith("to my todo")) {
    const todo = command.replace("add", "").replace(" to my todo", "");
    todos.push(todo);
    return `${todo} added to your todo`;
  } else if (command === "remove fishing from my to do") {
    const toRemoveToDo = toDo.indexOf("fishing");
    if (toRemoveToDo > -1) {
      toDo.splice(toRemoveToDo, 4);
    }
    console.log(toDo);
    return "Removed fishing from your todo";
  } else if (command === "What is on my todo?") {
    let toDoLength = toDo.length;
    return "you have " + toDo.length + " todos -" + toDo;
  } else if (command === "what day is it today?") {
    return new Date().toLocaleDateString("en-US", {
      day: "numeric",
      year: "numeric",
      month: "long",
    });
  } else if (command === "Set a timer for 4 minutes") {
    let myfunc = setInterval(function () {
      console.log("timer is done");
    }, 240000);
    return "timer is set for 4 min";
  } else if (number1 && number2) {
    switch (operation) {
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
      case "*":
        return number1 * number2;
      case "/":
        return number1 / number2;
    }
  } else {
    return "i am not getting what u r saying could you please repeat again";
  }
  return;
}

console.log(getReply("hello my name is dax"));
console.log(getReply("what is your name"));
console.log(getReply("add fishing to my to do"));
console.log(getReply("remove fishing from my to do"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 4 * 12"));
