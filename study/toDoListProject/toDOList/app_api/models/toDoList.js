const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const toDoListSchema = new Schema({
  title: String,
  description: String,
});

const toDoListModel = mongoose.model("toDoList", toDoListSchema);

module.exports = toDoListModel;
