class Person {
    constructor(firstName, lastName, id) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.id = id;
    }
  
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  module.exports = Person;
  