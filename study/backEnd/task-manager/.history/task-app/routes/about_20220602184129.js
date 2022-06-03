var express = require("express");
const data = require("./data.json");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("about", { title: "About", developers: data.developers });
});

module.exports = router;
