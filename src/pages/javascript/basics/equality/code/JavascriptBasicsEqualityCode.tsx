const studentName2Value = "`${studentName1}`";
export const AbstractEqualityStudentExampleCode = `
var studentName1 = "Frank";
var studentName2 = ${studentName2Value};

studentName1 == studentName2            // true
studentName1 === studentName2           // true`;

export const AbstractEqualityWorkshopEnrollmentExampleCode = `
var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;

workshopEnrollment1 == workshopEnrollment2            // true
workshopEnrollment1 === workshopEnrollment2           // true`;

export const ObjectComparisonCode = `
var object1 = { name: "this is a string inside an object" }
var object2 = { name: "this is a string inside an object" }
var object3 = object1

object1 == object2            // false
object1 === object2           // false


object1 == object3            // true
object1 === object3           // true`;
