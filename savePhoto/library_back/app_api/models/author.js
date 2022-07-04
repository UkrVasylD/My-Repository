const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Створення схеми моделі
const authorScheme = new Schema({
  name: String,
  age: Number,
  genre: String,
  photo: String,
});
//Створення моделі
const authorModel = mongoose.model("Author", authorScheme);

module.exports = authorModel;
