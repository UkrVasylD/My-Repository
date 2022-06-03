var express = require("express");
const data = require("./data.json");
var router = express.Router();

/* GET about page. */
router.get("/:category/:type", function (req, res, next) {
  console.log("req.params");
  console.log(req.params);
  if (req.params.category === "dev") {
    const dataObj = {
      title: "Developers",
    };

    if (req.params.type !== "all")
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

    if (req.params.type !== "all")
      dataObj.sponsors = data.sponsors.filter(
        (item) => item.type === req.params.type
      );
    else dataObj.sponsors = data.sponsors;

    res.render("aboutSponsors", dataObj);
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
  res.redirect("/about/dev/all");
});

module.exports = router;
