const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/groupsdb", {
  useNewUrlParser: true,
});

async function connectDb() {
  await mongoose.connect("mongodb://localhost:27017/groupsdb", {
    useNewUrlParser: true,
  });
}

module.exports = connectDb;
