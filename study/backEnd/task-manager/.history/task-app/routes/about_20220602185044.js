var express = require("express");
const data = require("./data.json");
var router = express.Router();

/* GET about page. */
router.get("/:gender", function (req, res, next) {
  res.render("about", {
    title: "About",
    developers: data.developers.filter(
      (item) => item.gender === req.params.gender
    ),
  });
});
router.get("/", function (req, res, next) {
  res.render("about", {
    title: "About",
    developers: data.developers,
  });
});

module.exports = router;
