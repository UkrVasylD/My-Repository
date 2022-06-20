var express = require("express");
var router = express.Router();
const ProductModel = require("../models/product.js");
const formidable = require("formidable");
const connectDb = require("../db");
connectDb();

/* GET home page. */
router.get("/", function (req, res, next) {
  if (req.query.SearchTitle) {
    ProductModel.find({ title: req.query.SearchTitle }, function (err, docs) {
      if (err) return console.log(err);

      console.log(docs);
      res.render("index", {
        title: "Product List",
        products: docs,
      });
    });
  } else {
    ProductModel.find({}, function (err, docs) {
      if (err) return console.log(err);

      console.log(docs);
      res.render("index", {
        title: "Product List",
        products: docs,
      });
    });
  }
});

router.get("/add", function (req, res, next) {
  res.render("ProductForm", {
    title: "Product Form",
  });
});

router.post("/new", function (req, res, next) {
  const form = formidable({ multiples: true });
  form
    .parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
      //Створення об’єкта моделі
      req.body.product = new ProductModel({
        title: fields.title,
        price: parseFloat(fields.price),
        photo: "/images/" + files.photo.originalFilename,
      });
    })
    .on("fileBegin", function (name, file) {
      //Аналіз подій
      //Зміна розташування файлів
      file.filepath = req.imagesDir + "\\" + file.originalFilename;
    });
  form.on("end", function (d) {
    //Збереження моделі і відключення від бази даних
    const docs = req.body.book;
    req.body.product.save(function (err) {
      // mongoose.disconnect();  // від’єднання від бази даних
      if (err) {
        console.log(err);
        next(err);
        return;
      }

      console.log("Збережено", docs);
      res.redirect("/");
    });
  });
});

router.get("/delete/:id", function (req, res, next) {
  console.log(req.params.id);
  ProductModel.findByIdAndDelete(req.params.id, function (err, doc) {
    if (err) return console.log(err);

    console.log("Виделено продукт ", doc);
    res.redirect("/");
  });
});

router.get("/deleteByTitle/:title", function (req, res, next) {
  console.log(req.params.title);
  ProductModel.findOneAndDelete(
    { title: req.params.title },
    function (err, doc) {
      if (err) return console.log(err);

      console.log("Виделено продукт ", doc);
      res.redirect("/");
    }
  );
});
module.exports = router;
