var express = require("express");
var router = express.Router();
const mainRoutControler = require("../controler/mainRout.js");
/* GET home page. */
router.get("/", mainRoutControler.getList);

module.exports = router;
