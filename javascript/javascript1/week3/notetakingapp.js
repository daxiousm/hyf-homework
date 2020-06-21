const notes = [];
// this function adds an abject with keys and values to notes array

function saveNote(content, id) {
  if (typeof id === "number" && typeof content === "string") {
    notes.push({ content, id });
  }
}
//get a note by id
function getNote(id) {
  if (typeof id == "number") return;
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      return notes[i].content;
    }
  }

  console.error("Note not found");
  return;
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
