const spiritAnimalNames = [
  "The Butterfly",
  "The Spider",
  "The Crow",
  "The Hawk",
  "The Grasshopper",
  "The Eagle",
  "The Lion",
  "The Bee",
  "The Mosquito",
  "The Bear",
];
let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}
function createListElements() {
  let li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      input.value +
        "-" +
        spiritAnimalNames[Math.floor(Math.random() * spiritAnimalNames.length)]
    )
  );
  ul.appendChild(li);
  input.value = "";
}
function addListAfterClick() {
  if (input.value.length > 0) {
    createListElements();
  }
}
function addListAfterMouseOver(event) {
  if (input.value.length > 0 && event.returnValue === true) {
    button.removeEventListener("click", addListAfterClick);
    createListElements();
  }
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("mouseover", addListAfterMouseOver);
