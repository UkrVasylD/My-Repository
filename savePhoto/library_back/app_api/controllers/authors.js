const formidable = require("formidable");
const AuthorModel = require("../models/author");
const fs = require("fs");

const sendJSONResponse = (res, status, content) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(status).json(content);
};

module.exports.getList = function (req, res) {
  const searchObj = req.query.searchParams || {};

  AuthorModel.find(searchObj, function (err, docs) {
    if (err)
      return sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Fetch faild!" },
      });

    sendJSONResponse(res, 200, { success: true, data: docs });
  });
};

module.exports.add = function (req, res, next) {
  console.log("adddddd");
  console.log(req.body);
  let author = new AuthorModel({
    name: req.body.name,
    age: parseFloat(req.body.age),
    genre: req.body.genre,
    photo: req.body.photo,
  });
  author.save(function (err, savedDocs) {
    if (err) {
      sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Saving faild!" },
      });
      return;
    }
    sendJSONResponse(res, 201, { success: true, data: savedDocs });
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
  let author = {
    name: req.body.name,
    age: parseFloat(req.body.age),
    genre: parseFloat(req.body.genre),
  };
  if (req.body.photo) {
    //Якщо надіслано нове фото, то змінюємо поле фото
    author.photo = req.body.photo;
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
  AuthorModel.findById(req.params.id, function (err, searchDocs) {
    if (err) {
      sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Find book faild!" },
      });
      return;
    }
    sendJSONResponse(res, 200, { success: true, data: searchDocs });
  });
};
