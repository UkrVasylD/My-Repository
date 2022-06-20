var express = require("express");
var router = express.Router();
const fs = require("fs");
const formidable = require("formidable");

const data = require("../data/data.json");

router.get("/", function (req, res, next) {
  res.render("phoneList", { title: "Phone list", phoneList: data.phoneList });
});

router.get("/addGET", function (req, res, next) {
  res.render("phoneForm", {
    title: "Phone list new",
    phoneList: data.phoneList,
  });
});

router.get("/addPOST", function (req, res, next) {
  res.render("phoneFormPost", {
    title: "Phone list new",
    phoneList: data.phoneList,
  });
});

router.get("/new", function (req, res, next) {
  data.phoneList.push({
    id: new Date().getTime(),
    name: req.query.neme,
    image: req.query.image,
  });
  console.log(data.phoneList);

  fs.writeFileSync(req.dataDir + "/data.json", JSON.stringify(data));
  res.redirect("/phoneList");
});

router.post("/newpost", function (req, res, next) {
  const form = formidable({ multiples: true });

  form
    .parse(req, (err, fields, files) => {
      console.log("111111");
      if (err) {
        next(err);
        return;
      }
      //Аналіз полів

      data.phoneList.push({
        id: new Date().getTime(),
        name: fields.name,
        image: "/images/" + files.image.originalFilename,
      });
    })
    .on("fileBegin", function (name, file) {
      console.log("222222");
      //Аналіз подій
      //Зміна розташування файлів
      file.filepath = req.imagesDir + "\\" + file.originalFilename;
    });
  form.on("end", function (d) {
    console.log("3333333333");
    //Помилка модуля (викликається двічі)

    fs.writeFileSync(req.dataDir + "/data.json", JSON.stringify(data));
    res.redirect("/phoneList");
  });
});

module.exports = router;
