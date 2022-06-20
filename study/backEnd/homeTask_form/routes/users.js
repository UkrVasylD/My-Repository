var express = require("express");
var router = express.Router();
var path = require("path");
const formidable = require("formidable");
const fs = require("fs");

const data = require("../data/data.json");

router.get("/", function (req, res, next) {
  res.render("users", { title: "Users list", users: data.users });
});

router.get("/add", function (req, res, next) {
  res.render("userAdd", { title: "Users add" });
});

router.get("/:id", function (req, res, next) {
  res.render("userItem", {
    title: "User item",
    user: data.users.find((item) => item.id == req.params.id),
  });
});

router.get("/remove/:id", function (req, res, next) {
  console.log(req.params.id);
  data.users = data.users.filter((item) => item.id != req.params.id);
  fs.writeFileSync(req.dataDir + "/data.json", JSON.stringify(data));
  res.redirect("/users");
});

router.post("/new", function (req, res, next) {
  const form = formidable({ multiples: true });
  form
    .parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
      //Аналіз полів

      data.users.push({
        id: new Date().getTime(),
        name: fields.name,
        age: parseFloat(fields.age),
        photo: "/images/" + files.photo.originalFilename,
      });
    })
    .on("fileBegin", function (name, file) {
      //Аналіз подій
      //Зміна розташування файлів
      file.filepath = req.imagesDir + "\\" + file.originalFilename;
    });
  form.on("end", function (d) {
    fs.writeFileSync(req.dataDir + "/data.json", JSON.stringify(data));
    res.redirect("/users");
  });
});
module.exports = router;
