const notes = [];
// this function adds an abject with keys and values to notes array

function saveNote(content, id) {
  if (typeof id === "number" && typeof content === "string") {
    const noteApp = { content: content, id: id };
    notes.push(noteApp);
  }
}
//get a note by id
function getNote(id) {
  if (typeof id == "number") {
    for (let i = 0; i < notes.length; i++) {
      if (id === notes[i].id) {
        return notes[i].content;
      }
    }
    console.log("put the correct id number");
    return;
  }
  console.log("Not a number");
  return;
}
function getAllNotes() {
  return notes;
}
function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with the id: ${notes[i].id} has the following note text: " ${notes[i].content} " `
    );
  }
  return;
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);
const firstNote = getNote(1);
console.log(firstNote);
logOutNotesFormatted();
