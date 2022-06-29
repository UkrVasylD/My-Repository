const formidable = require("formidable");
const AuthorModel = require("../models/author");
const fs = require("fs");

const sendJSONResponse = (res, status, content) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(status).json(content);
};

module.exports.getList = function (req, res) {
  const searchObj = req.query.searchParams || {};

  AuthorModel.find(searchObj, function (err, author) {
    if (err)
      return sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Fetch faild!" },
      });

    sendJSONResponse(res, 200, { success: true, data: author });
  });
};

module.exports.add = function (req, res, next) {
  let author = new AuthorModel({
    title: req.body.name,
    price: parseFloat(req.body.genere),
    price: parseFloat(req.body.year),

    photo: req.body.photo,
  });
  author.save(function (err, savedAuthor) {
    if (err) {
      sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Saving faild!" },
      });
      return;
    }
    sendJSONResponse(res, 201, { success: true, data: savedAuthor });
  });
};

module.exports.delete = function (req, res) {
  console.log("---------req.body");
  console.log(req.body);
  AuthorModel.findByIdAndDelete(req.body.id, function (err) {
    if (err) {
      console.log("---------err");
      console.log(err);
      sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Delete faild!" },
      });
      return;
    }
    sendJSONResponse(res, 200, { success: true });
  });
};

module.exports.update = function (req, res, next) {
  console.log("- updat ---------");
  console.log(req.body);
  let book = {
    name: req.body.name,
    year: parseFloat(req.body.year),
    genere: req.body.genere,
  };
  if (req.body.photo) {
    //Якщо надіслано нове фото, то змінюємо поле фото
    book.photo = req.body.photo;
  }
  AuthorModel.findByIdAndUpdate(
    req.body._id,
    author,
    { new: true }, //у колбек передається оновлений документ
    function (err) {
      // mongoose.disconnect()
      if (err) {
        sendJSONResponse(res, 500, {
          success: false,
          err: { msg: "Update faild!" },
        });
        return;
      }

      sendJSONResponse(res, 200, { success: true });
    }
  );
};

module.exports.getById = function (req, res) {
  //Пошук об"єкта-книги за id
  AuthorModel.findById(req.params.id, function (err, searchAuthor) {
    if (err) {
      sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Find book faild!" },
      });
      return;
    }
    sendJSONResponse(res, 200, { success: true, data: searchBook });
  });
};
