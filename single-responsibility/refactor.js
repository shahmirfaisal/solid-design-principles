function notify(message) {
  console.log(message);
  // we can also email or send a push notification
}

class Student {
  constructor(name) {
    this.name = name;
    this.courses = [];
  }

  enrollCourse(course) {
    this.courses.push(course);
    notify(`${this.name}, you have successfully enrolled ${course}.`);
  }
}

const Shahmir = new Student("Shahmir");
Shahmir.enrollCourse("Physics");
