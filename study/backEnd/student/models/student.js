const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Створення схеми моделі
const studentScheme = new Schema({
  name: String,
  age: Number,
  course: Number,
});
//Створення моделі
const studentModel = mongoose.model("Student", studentScheme);

module.exports = studentModel;
