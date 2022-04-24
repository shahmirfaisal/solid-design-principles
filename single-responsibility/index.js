class Student {
  constructor(name) {
    this.name = name;
    this.courses = [];
  }

  enrollCourse(course) {
    this.courses.push(course);
    this.notify(course);
  }

  notify(course) {
    console.log(`${this.name}, you have successfully enrolled ${course}.`);
  }
}

const Shahmir = new Student("Shahmir");
Shahmir.enrollCourse("Physics");
