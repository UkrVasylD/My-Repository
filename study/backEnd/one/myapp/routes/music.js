var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("music", {
    musicGroupName: "2+3",
    musicGroupText: "this music group is the best group of the world",
  });
});

router.get("/3x6", function (req, res) {
  res.render("music", {
    musicGroupName: "3x6",
    musicGroupText: "this music group is the best group of the world",
  });
});

router.get(
  "/3x6/:id",
  function (req, res, next) {
    const id = req.params[["id"]];
    res.send(`id = ${id}`);
    next();
  }
  // function (req, res, next) {
  //   res.render("music", {
  //     musicGroupName: "3x6 with id",
  //     musicGroupText: "this music group is the best group of the world",
  //   });
  // }
);

module.exports = router;
