var express = require("express");
var router = express.Router();
// Задача 2. Розробити серверну частину додатку, який за відповідними
// маршрутами (“/”, “/coffee”, “/music”) повертає створені HTML документи
// (розмістіть їх там же, де і додаток), що описують: інформацію про себе,
// інфорімацію про улюблену кав’ярню,  інформацію про улюблений музичний
// гурт.
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Expres" });
});

router.get("/coffee", function (req, res, next) {
  res.render("index", { title: "coffee" });
});

router.get("/music", function (req, res, next) {
  res.render("index", { title: "music" });
});
module.exports = router;
