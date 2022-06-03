var express = require("express");
const data = require("./data.json");
var router = express.Router();

/* GET home page. */
router.get("/:id", function (req, res, next) {
  res.render("tasks", {
    title: "One task",
    taskList: data.taskList.filter((item) => item.id === req.params.id),
  });
});
router.get("/", function (req, res, next) {
  res.render("tasks", { title: "All tasks", taskList: data.taskList });
});

module.exports = router;
