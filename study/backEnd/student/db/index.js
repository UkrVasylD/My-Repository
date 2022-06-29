const mongoose = require("mongoose");

async function connectDb() {
  await mongoose.connect("mongodb://localhost:27017/studentdb", {
    useNewUrlParser: true,
  });
}

module.exports = connectDb;
