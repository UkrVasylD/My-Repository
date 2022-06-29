var express = require("express");
var router = express.Router();
const StudentModel = require("../models/student.js");

const connectDb = require("../db");
connectDb();
/* GET users listing. */
router.get("/", function (req, res, next) {
  StudentModel.find({}, function (err, docs) {
    if (err) return console.log(err);
    res.render("student", {
      title: "Student",
      students: docs,
    });
  });
});

router.get("/add", function (req, res, next) {
  res.render("studentForm", {
    title: "Student",
  });
});

router.post("/new", function (req, res, next) {
  console.log(111111111111111 + req.body.name);
  const student = new StudentModel({
    name: req.body.name,
    age: req.body.age,
    course: req.body.course,
  });
  student.save(function (err) {
    if (err) return console.log(err);

    console.log("Сохранен объект student", student);
    res.redirect("/student");
  });
});

router.get("/edit/:id", function (req, res, next) {
  res.render("studentForm", {
    title: "Student",
  });
});

module.exports = router;
