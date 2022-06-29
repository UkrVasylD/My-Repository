const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  price: Number,
  photo: {
    data: Buffer,
    contentType: String,
  },
});

const BookModel = mongoose.model("Book", bookSchema);

module.exports = BookModel;
