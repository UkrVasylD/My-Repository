var express = require("express");
const data = require("./data.json");
var router = express.Router();

/* GET about page. */
router.get("/:category/:type", function (req, res, next) {
const dataObj={}
if(req.params.category==='dev'){
  if(req.params.type)
    dataObj.developers= data.developers.filter(
      (item) => item.type === req.params.type
    ),
}
  res.render("about", {
    title: "About",
    developers: data.developers.filter(
      (item) => item.gender === req.params.gender
    ),
  });
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
