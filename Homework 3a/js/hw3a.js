
const nameEntered = prompt("Enter your first name:");
const gradeStanding = Number(prompt("Enter number of units completed in college:"));
if (gradeStanding <= 31) {
  document.write(`Hello ${nameEntered} your grade standing is a Freshman`);
} else if (gradeStanding <= 60) {
  document.write(`Hello ${nameEntered} your grade standing is a Sophmore`);
} else if (gradeStanding <= 90) {
    document.write(`Hello ${nameEntered} your grade standing is a Junior`);
} else if (gradeStanding >= 91) {
    document.write(`Hello ${nameEntered} your grade standing is a Senior`);
} else {
    document.write("Not a valid number of units");
  }

