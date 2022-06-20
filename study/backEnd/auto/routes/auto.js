var express = require("express");
var router = express.Router();
var path = require("path");
const fs = require("fs");
const formidable = require("formidable");

const data = require("../db/data.json");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("auto", { title: "Auto list", cars: data.cars });
});

router.get("/new", function (req, res, next) {
  res.render("autoAdd", { title: "Auto add", users: data.user });
});

router.post("/add", function (req, res, next) {
  const form = formidable({ multiples: true });
  form
    .parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }

      data.cars.push({
        id: new Date().getTime(),
        Brand: fields.Brand,
        Year: fields.Year,
        Price: parseFloat(fields.Price),
        Photo: "/images/" + files.Photo.originalFilename,
        OwnerId: fields.OwnerId,
        CarNumber: "CarNumber",
      });
    })
    .on("fileBegin", function (name, file) {
      file.filepath = req.imagesDir + "\\" + file.originalFilename;
    });
  form.on("end", function (d) {
    fs.writeFileSync(req.dbDir + "/data.json", JSON.stringify(data));
    res.redirect("/auto");
  });
});

router.get("/info/:id", function (req, res, next) {
  const car = data.cars.find((item) => item.id == req.params.id);
  const owner = data.user.find((item) => item.id == car.OwnerId);
  console.log(car);
  res.render("autoInfo", {
    title: "Auto info",
    car: car,
    user: owner.Owner,
  });
});

module.exports = router;
