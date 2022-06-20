var express = require("express");
var router = express.Router();
const dataList = require("./data.json");

router.get("/", function (req, res, next) {
  res.render("infoList", { infoList: dataList.infoList });
});

module.exports = router;
