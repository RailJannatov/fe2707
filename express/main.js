const express = require("express");
const bodyParser = require("body-parser");
// const jsonParser = bodyParser.json();
const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());

const PORT = process.env.PORT || 3003;

let students = [
  { id: 1, name: "Fizza", age: 20, grade: 70, gender: "female" },
  { id: 2, name: "Mehdi", age: 21, grade: 90, gender: "male" },
  { id: 3, name: "Ali", age: 19, grade: 85, gender: "male" },
  { id: 4, name: "Jale", age: 19, grade: 100, gender: "female" },
  { id: 5, name: "Dilruba", age: 23, grade: 50, gender: "female" },
  { id: 6, name: "Fatima", age: 19, grade: 97, gender: "female" },
];

app.get("/students", (req, res) => {
  // const age = parseInt(req.query.age);
  // const gender = req.query.gender;
  // const { age, gender, sort } = req.query;
  // let filteredStudents = [];
  // if (sort) {
  //   if (sort === "asc") {
  //     filteredStudents = students.sort((a, b) => a.grade - b.grade);
  //   }
  //   if (sort === "desc") {
  //     filteredStudents = students.sort((a, b) => b.grade - a.grade);
  //   }
  // }
  // if (!age && !gender) {
  //   res.send(students);
  // }
  // if (age && gender) {
  //   filteredStudents = students.filter(
  //     (student) => student.age === parseInt(age) && student.gender === gender
  //   );
  // }
  // if (!age && gender) {
  //   filteredStudents = students.filter((student) => student.gender === gender);
  // } else {
  //   filteredStudents = students.filter((student) => student.age === age);
  // }

  // if (filteredStudents.length === 0) {
  //   res.status(404).json({ message: "Students based on this age not found" });
  // }
  res.send(students);
  // res.send(students);
});

app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((student) => student.id === id);
  if (!student) {
    res.status(404).json({ message: "Student not found" });
  }
  res.send(student);
});

app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(req);

  if (!id) {
    res.status(404).send("Id not found");
  }
  const findItem = students.find((item) => item.id === id);

  if (!findItem) {
    res.status(404).send("Student not found");
  }

  if (req.body.grade !== undefined && req.body.age !== undefined) {
    findItem.grade = req.body.grade;
    findItem.age = req.body.age;
  }

  res.send(students);
});

app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    ...req.body,
  };
  students.push(newStudent);
  res.send(students);
});

app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter((item) => item.id !== id);
  res.send(students);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

// fetch("http://localhost:3003/students/", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ name: "Ilahe", age: 23, grade: 76, gender: "female" }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// fetch("http://localhost:3003/students/6", {
//   method: "DELETE",
//   headers: { "Content-Type": "application/json" },
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// fetch("http://localhost:3003/students/2", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ grade: 4, age: 24 }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// const human = {
//   name: "Elvin",
//   surname: "Shirinov",
//   assets: {
//     home: "Mirvari",
//   },
// };

// Object.freeze(human.name);

// const test = JSON.parse(JSON.stringify(human)); //deep copy

// const deepObject = structuredClone(human); //deep copy
// deepObject.assets.home = "Avante";
// console.log({ human });
// console.log({ deepObject });

// const anotherCopy = Object.assign({}, human); //shallow copy

// test.assets.home = "Renesans";
// console.log("anotherCopy", anotherCopy);

// anotherCopy.assets.home = "Kristal";
// console.log("human", human);

// console.log("human", human);

// const person = { ...human }; //shallow copy

// person.surname = "Jannatov";
// person.assets.home = "Melissa";

// console.log("human", human);
