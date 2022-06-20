var express = require("express");
var router = express.Router();
const formidable = require("formidable");
const groupModel = require("../model/group.js");
const mongoose = require("mongoose");

const connectDb = require("../data");
connectDb();

router.get("/", function (req, res, next) {
  res.render("users", { title: "group", users: data.users });
});

router.get("/add", function (req, res, next) {
  res.render("groupFormPost", { title: "group-add-form" });
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

      req.body.group = new groupModel({
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
    req.body.group.save(function (err) {
      const dock = req.body.group;
      if (err) return console.log(err);

      console.log("Сохранен объект user", dock);
    });
  });
});
module.exports = router;
