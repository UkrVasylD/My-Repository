var express = require("express");
const data = require("./data.json");
var router = express.Router();

/* GET about page. */
router.get("/:category/:type", function (req, res, next) {
  if (req.params.category === "dev") {
    const dataObj = {
      title: "Developers",
    };

    if (req.params.type)
      dataObj.developers = data.developers.filter(
        (item) => item.gender === req.params.type
      );
    else dataObj.developers = data.developers;

    res.render("aboutDev", dataObj);
  }
  if (req.params.category === "sponsors") {
    const dataObj = {
      title: "Sponsors",
    };

    if (req.params.type)
      dataObj.sponsors = data.sponsors.filter(
        (item) => item.type === req.params.type
      );
    else dataObj.sponsors = data.sponsors;

    res.render("aboutSponsores", dataObj);
  }
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
