const students = [
  { name: "Ricky", attendedLecture: true },
  { name: "Bubbles", attendedLecture: false },
  { name: "Juliann", attendedLecture: true },
  { name: "Mr. Lahey", attendedLecture: false },
];

const numbers = [1, 2, 3, 4, 5, 7.5];

const areNumsEven = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    areNumsEven.push(true);
  } else {
    areNumsEven.push(false);
  }
}

console.log(areNumsEven);

// const areNumsEven2 = numbers.map(function () {});
const areNumsEven2 = numbers.map((num, i) => {
  return num % 2 === 0 ? true : false;
});

const double = (n) => {
  return n * 2;
};

const numsDoubled = numbers.map((num) => {
  return num * 2;
});

const numsDoubled2 = numbers.map(double);

const newNums = numbers.map((num) => {
  const n = parseInt(num); // remove any decimals.

  if (n % 2 === 0) {
    return n / 2;
  } else {
    return n * 2;
  }
});

const studentNameListItems = students
  .filter((student) => {
    return student.attendedLecture;
  })
  .map((student) => {
    return `<li>${student.name}</li>`;
  });

console.log(studentNameListItems);

// Add a new method to the Array prototype so all new arrays inherit it. Not needed for exam.
Array.prototype.map2 = function (callback) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    const newItem = callback(this[i], i);
    newArr.push(newItem);
  }

  return newArr;
};

// const doubledNums = numbers.map2(double);
// console.log(doubledNums);

const studentParagraphs = students.map2((student, i) => {
  return `<p id="student-${i}">name: ${student.name}, attended lecture: ${student.attendedLecture}</p>`;
});

console.log(studentParagraphs);
