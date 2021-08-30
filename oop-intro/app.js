/* 
Use OOP to design objects to represent Students, Teachers, Lectures

Students should be able to attend lectures.
Lectures should have one Teacher who is running the lecture.

Give students a list of hobbies.
From a lecture, figure out which students have shared hobbies.
*/

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, yearsTeachingExperience) {
    // Calls the parent constructor (Person in this case) to pass the shared
    // properties so Person can set this data.
    super(firstName, lastName);
    // Only the teacher specific properties are added here.
    this.yearsTeachingExperience = yearsTeachingExperience;
  }
  // Methods specific to the teacher class (not Person) can go here.
}

class Student extends Person {
  constructor(firstName, lastName, hobbies = []) {
    // Calls the parent constructor (Person in this case) to pass the shared
    // properties so Person can set this data.
    super(firstName, lastName);
    this.hobbies = hobbies;
  }
}

class Lecture {
  /**
   * Constructs a new instance of Lecture.
   * @param {Teacher} teacher
   * @param {string} topic The topic of the lecture.
   * @param {string} zoomLink Where the lecture is being held.
   * @param {Array<Student>} attendees
   * @returns {Lecture} Implicitly returns the new Lecture instance.
   */
  constructor(teacher, topic, zoomLink, attendees = []) {
    this.teacher = teacher;
    this.topic = topic;
    this.zoomLink = zoomLink;
    this.attendees = attendees;
  }

  generateAttendanceList() {
    const fullNames = [];

    for (let i = 0; i < this.attendees.length; i++) {
      const student = this.attendees[i];
      fullNames.push(student.fullName());
    }

    console.log(fullNames);
    return fullNames;
  }

  groupStudentsBySharedHobbies() {
    /* 
    We want data structured like so:
    
    hobbyName1 - [student1, student2]
    hobbyName2 - [student2, student4, student 6]
    hobbyName3 - [student6, student1]
    key        - value
    */

    const sharedHobbiesTable = {};

    for (let i = 0; i < this.attendees.length; i++) {
      const student = this.attendees[i];

      for (let j = 0; j < student.hobbies.length; j++) {
        const hobby = student.hobbies[j];

        if (hobby in sharedHobbiesTable) {
          // Use bracket notation for keys whenever the key is stored in a variable.
          sharedHobbiesTable[hobby].push(student);
        } else {
          // The hobby is not yet in the table. Set up the array with the first
          // student found with this hobby.
          sharedHobbiesTable[hobby] = [student];
        }
      }
    }
    return sharedHobbiesTable;
  }
}

const neil = new Teacher("Neil", "Mos", 3);
const jim = new Teacher("Jim", "Ree", 2);
const joseph = new Student("Joseph", "T", [
  "Fashion",
  "Asking questions",
  "coding",
]);

const oopLecture = new Lecture(
  neil,
  "The joys of OOP",
  "https://codingdojo.zoom.us/j/97721336303?pwd=NjVYNVNTeS9WK3MyVTVib2RTb1Vidz09",
  [
    joseph,
    new Student("Carol", "Chen", ["coding", "Fashion", "skating"]),
    new Student("Peter", "Liu", ["gaming", "fitness", "music"]),
    new Student("Hamdy", "Yahya", ["fitness", "music", "Photography"]),
  ]
);

const pythonSyntax = new Lecture(
  jim,
  "Intro to Python Syntax",
  "https://codingdojo.zoom.us/j/97721336304?pwd=NjVYNVNTeS9WK3MyVTVib2RTb1Vidz09",
  [
    new Student("John", "Doe", ["gaming", "fitness", "music"]),
    new Student("Jane", "Doe", ["fitness", "music", "Photography"]),
  ]
);

// console.log(neil.fullName());
// console.log(jim.fullName());
// console.log(joseph.fullName());
oopLecture.generateAttendanceList();
pythonSyntax.generateAttendanceList();

console.log(
  "oopLecture hobby groups",
  oopLecture.groupStudentsBySharedHobbies()
);
console.log(
  "pythonSyntax hobby groups",
  pythonSyntax.groupStudentsBySharedHobbies()
);
