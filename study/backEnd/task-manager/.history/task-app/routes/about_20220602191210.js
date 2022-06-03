var express = require("express");
const data = require("./data.json");
var router = express.Router();

/* GET about page. */
router.get("/:category/:type", function (req, res, next) {
  const dataObj = {
    title: "Developers",
  };
  if (req.params.category === "dev") {
    if (req.params.type)
      dataObj.developers = data.developers.filter(
        (item) => item.type === req.params.type
      );
    else dataObj.developers = data.developers;
  }

  res.render("aboutDev", dataObj);
});
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
