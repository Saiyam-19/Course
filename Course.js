class Course {
    constructor(name, code, teacher) {
      this.name = name;
      this.code = code;
      this.teacher = teacher;
    }
  
    toString() {
      return `${this.name} (${this.code}) taught by ${this.teacher}`;
    }
  }
  
  module.exports = Course;
  