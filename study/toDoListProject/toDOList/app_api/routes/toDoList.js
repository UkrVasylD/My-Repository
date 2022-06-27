var express = require("express");
var router = express.Router();

const toDoListControlers = require("../controler/toDoList");

/* GET home page. */
router.get("/", toDoListControlers.getList);

router.post("/", toDoListControlers.addTask);

module.exports = router;
