var express = require("express");
var router = express.Router();
const dataList = require("./data.json");

router.get("/:id", function (req, res, next) {
  console.log(dataList.infoList.filter((item) => item.id == req.params.id));
  res.render("infoItem", {
    infoItem: dataList.infoList.filter((item) => item.id == req.params.id),
  });
});

module.exports = router;
