const express = require("express");

const app = express();

const PORT = process.env.PORT || 3003;

const students = [
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
  const { age, gender, sort } = req.query;
  let filteredStudents = [];
  console.log(gender);
  if (sort) {
    if (sort === "asc") {
      filteredStudents = students.sort((a, b) => a.grade - b.grade);
    }
    if (sort === "desc") {
      filteredStudents = students.sort((a, b) => b.grade - a.grade);
    }
  }
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
  res.send(filteredStudents);
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

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

// fetch('')
