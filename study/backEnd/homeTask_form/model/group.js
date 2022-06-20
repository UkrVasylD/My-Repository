const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Створення схеми моделі
const gtoupScheme = new Schema({
  name: String,
  age: Number,
  photo: String,
});
//Створення моделі
const BookModel = mongoose.model("group", gtoupScheme);

module.exports = BookModel;
