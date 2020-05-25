const class07Students = [];
function addStudentToClass(studentName) {
  if (getNumberOfStudents(class07Students) < 6) {
    if (studentName.trim() == " ") {
      return "You cannot add an empty string to a class";
    } else {
      for (let i = 0; i < getNumberOfStudents(class07Students); i++) {
        if (class07Students.includes(i)) {
          return "student " + studentName + "is already in the class";
        }
      }
    }
  } else if (studentName.toLocaleLowerCase() === "Queen") {
    console.log("she is allowed in every classroom");
  } else {
    console.log(" we are not allowed to add more students");
    return;
  }
  class07Students.push(studentName);
  console.log("You are allowed to be in this class");
  return;
}

function getNumberOfStudents(class07Students) {
  return class07Students.length;
}
function studentsInClass(studentName) {
  for (let i = 0; i < studentName.length; i++) {
    console.log(studentName[i]);
    console.log(addStudentToClass(studentName[i]));
  }
  return;
}
