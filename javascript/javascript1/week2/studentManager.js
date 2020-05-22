const class07Students = [];
function addStudentToClass(studentName) {
  if (getNumberOfStudents(class07Students) < 6) {
    if (studentName == " ") {
      output = "You cannot add an empty string to a class";
      return output;
    } else {
      for (let i = 0; i < getNumberOfStudents(class07Students); i++) {
        if (studentName == class07Students[i]) {
          output = "student " +  studentName  + "is already in the class";
          return output;
        }
      }
    }
  } else if (studentName == "Queen") {
    console.log("she is allowed in every classroom");
  } else {
    output = " we are not allowed to add more students";
    return output;
  }
  class07Students.push(studentName);
  return "You are allowed to be in this class";
}

function getNumberOfStudents(class07Students) {
  const arrLength = class07Students.length;
  return arrLength;
}
function studentsInClass(studentName) {
  for (let i = 0; i < studentName.length; i++) {
    console.log(studentName[i]);
    console.log(addStudentToClass(studentName[i]));
  }
  return;
}
