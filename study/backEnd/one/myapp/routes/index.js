var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    name: "Vasyl",
    age: 31,
    textAboutSelf: "lorem slkdfjal;l  houihdsa  dsaffa",
  });
});

router.get("/coffee", function (req, res, next) {
  res.render("coffee", {
    coffeeName: "MacCoffee",
    textAboutCoffee: " asdfasf lorem slkdfjal;l  houihdsa  dsaffa",
  });
});
module.exports = router;
