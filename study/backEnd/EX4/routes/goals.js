var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("goals", {
    title: "Goals",
    YurGoals: [
      { goals: "get to work" },
      { goals: "study english" },
      { goals: "have big salery" },
    ],
  });
});

module.exports = router;
