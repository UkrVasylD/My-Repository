const express = require("express");
var app = express();
app.get(
  "/",

  //--- Допоміжна функція
  function (req, res, next) {
    req.current_data = Date.now(); // Додаємо нову властивість (дата) req.current_data
    next();
  },
  function (req, res) {
    res.send(req.current_data.toString());
  }
);
app.listen(3000, function () {
  console.log("listen 3000");
});
