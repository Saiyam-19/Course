const Person = require('./Person');

class Student extends Person {
  constructor(firstName, lastName, id, enrolledCourses = []) {
    super(firstName, lastName, id);
    this.enrolledCourses = enrolledCourses;
    this.coursesTaken = new Map();
  }

  addCourse(course) {
    this.enrolledCourses.push(course);
  }

  addTakenCourse(courseCode, course) {
    if (this.coursesTaken.has(courseCode)) {
      throw new Error("Course already taken");
    }
    this.coursesTaken.set(courseCode, course);
  }
}

module.exports = Student;
