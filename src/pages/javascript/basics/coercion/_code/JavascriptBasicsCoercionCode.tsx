const studentsConsoleLog = "console.log(`There are ${numStudents} students.`);";
export const StudentsExampleCode = `
var numStudents = 16;
${studentsConsoleLog}
// "There are 16 students."`;

export const CoercionStringConcatenationExampleCode = `
var msg1 = "There are ";
var numStudents = 16;
var msg2 = " students.";
console.log(msg1 + numStudents + msg2);
// "There are 16 students."`;

const coercionNumberToStringExampleConsoleLog =
  'console.log(`There are ${numberStudents + ""} students.`)';
export const CoercionNumberToStringExampleCode = `
var numStudents = 16;
${coercionNumberToStringExampleConsoleLog}
// "There are 16 students."`;

const CoercionArrayJoinCodeExampleConsoleLog =
  'console.log(`There are ${[numberStudents].join("")} students.`)';
export const CoercionArrayJoinCode = `
var numStudents = 16;
${CoercionArrayJoinCodeExampleConsoleLog}
// "There are 16 students."`;

const coercionToStringExampleConsoleLog =
  "console.log(`There are ${numberStudents.toString()} students.`)";
export const CoercionToStringExampleCode = `
var numStudents = 16;
${coercionToStringExampleConsoleLog}
// "There are 16 students."`;

const coercionStringExampleConsoleLog =
  "console.log(`There are ${String(numberStudents)} students.`)";
export const CoercionStringExampleCode = `
var numStudents = 16;
${coercionStringExampleConsoleLog}
// "There are 16 students."`;
