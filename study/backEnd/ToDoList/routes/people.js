var express = require("express");
const data = require("./data.json");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("people", { title: "people", peoples: data.people });
});

router.get("/man", function (req, res, next) {
  res.render("people", {
    title: "people",
    peoples: data.people.filter((item) => item.gender === "man"),
  });
});

router.get("/woman", function (req, res, next) {
  res.render("people", {
    title: "people",
    peoples: data.people.filter((item) => item.gender === "woman"),
  });
});

router.get("/all", function (req, res, next) {
  res.redirect("/people");
});
module.exports = router;
