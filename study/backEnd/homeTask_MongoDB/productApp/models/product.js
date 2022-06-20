const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Створення схеми моделі
const productScheme = new Schema({
  title: String,
  price: Number,
  photo: String,
});

//Створення моделі
const ProductModel = mongoose.model("Product", productScheme);

module.exports = ProductModel;
