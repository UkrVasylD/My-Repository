var express = require("express");
var router = express.Router();
const formidable = require("formidable");
const BookModel = require("../models/books.js");
const connectDb = require("../db");
connectDb();

router.get("/", function (req, res, next) {
  if (req.query.SharchParams) {
    BookModel.find({ title: req.query.SharchParams }, function (err, docs) {
      if (err) return console.log(err);

      console.log(docs);
      res.render("books", { title: "Books", books: docs });
    });
  } else {
    BookModel.find({}, function (err, docs) {
      if (err) return console.log(err);

      console.log(docs);
      res.render("books", { title: "Books", books: docs });
    });
  }
});

router.get("/add-form-post", function (req, res, next) {
  res.render("booksFormPost", { title: "New book" });
});

router.post("/new", function (req, res, next) {
  const form = formidable({ multiples: true });
  form
    .parse(req, (err, fields, files) => {
      console.log("111111");
      if (err) {
        next(err);
        return;
      }
      //Створення об’єкта моделі
      req.body.book = new BookModel({
        title: fields.title,
        price: parseFloat(fields.price),
        photo: "/images/" + files.photo.originalFilename,
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
    const book = req.body.book;
    //Помилка модуля (викликається двічі)
    req.body.book.save(function (err) {
      // mongoose.disconnect();  // від’єднання від бази даних
      if (err) {
        console.log(err);
        next(err);
        return;
      }

      console.log("Збережено", book);
    });
  });
  res.redirect("/books/add-form-post");
});

router.get("/edit/:id", function (req, res, next) {
  BookModel.findById(req.params.id, function (err, docs) {
    if (err) return console.log(err);

    console.log(docs);
    res.render("booksFormPostEdit", { title: "Edit form", book: docs });
  });
});

router.post("/edit", function (req, res, next) {
  let book;
  const form = formidable({ multiples: true });
  form
    .parse(req, (err, fields, files) => {
      console.log("111111");
      if (err) {
        next(err);
        return;
      }

      //Створення об’єкта моделі
      book = {
        title: fields.title,
        price: parseFloat(fields.price),
      };
      req.body.id = fields.id;
      req.body.book = book;

      if (files.photo.originalFilename) {
        //Якщо надіслано нове фото, то змінюємо поле фото
        book.photo = "/images/" + files.photo.originalFilename;
      }
    })
    .on("fileBegin", function (name, file) {
      console.log("222222");
      //Аналіз подій
      //Зміна розташування файлів
      if (file) file.filepath = req.imagesDir + "\\" + file.originalFilename;
    });
  form.on("end", function (d) {
    console.log("3333333333");
    //Збереження моделі і відключення від бази даних
    console.log("new - book: " + req.body);
    console.log(req.body);
    console.log(req.body.book);
    BookModel.findByIdAndUpdate(
      req.body.id,
      req.body.book,
      { new: true }, //у колбек передається оновлений документ
      function (err, newBook) {
        // mongoose.disconnect()
        if (err) return console.log(err);

        console.log('Оновлений об"єкт', newBook);
        res.redirect("/books");
      }
    );
  });

  router.get("/:id", function (req, res, next) {
    BookModel.findByIdAndDelete(req.params.id, function (err, docs) {
      if (err) return console.log(err);

      console.log("Delete book", docs);
      res.redirect("/books");
    });
  });
});
module.exports = router;
