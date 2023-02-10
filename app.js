const Person = require('./Person');
const Student = require('./Student');
const Course = require('./Course');

try {
  const studentId = parseInt("123456");
  if (isNaN(studentId)) {
    throw new Error("Invalid student ID");
  }

  const student = new Student("John", "Doe", studentId);
  console.log(student.fullName());

  student.addCourse("ENG 101");
  student.addCourse("MATH 103");
  console.log("Enrolled courses:", student.enrolledCourses);

  const course = new Course("English Literature", "ENG 101", "Ms. Smith");
  const course1 = new Course("Mathematics", "MATH 103", "Mr. Smith");
  console.log(course.toString());
  console.log(course1.toString());

  student.addTakenCourse("ENG 101", course);
  student.addTakenCourse("MATH 103", course1);
  console.log("Courses taken:", student.coursesTaken);

  student.addTakenCourse("ENG 101", course);
} catch (error) {
  console.error(error.message);
}
