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
  let num = 0;
  let author;
  console.log("req.author");
  console.log(req.author);
  const form = formidable({ multiples: true });
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log("files.photo");
    console.log(files.photo);
    author = new AuthorModel({
      name: fields.name,
      age: parseFloat(fields.age),
      photo: {
        data: fs.readFileSync(files.photo.filepath),
        contentType: files.photo.mimetype,
      },
    });
  });
  form.on("end", function (d) {
    console.log("3333333333");
    num++;
    //Помилка модуля (викликається двічі)
    if (num == 1) {
      //Збереження моделі і відключення від бази даних
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
    }
  });
};

module.exports.delete = function (req, res) {
  console.log("---------req.body");
  console.log(req.body);
  BookModel.findByIdAndDelete(req.body.id, function (err) {
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
  let num = 0;
  let author;
  const form = formidable({ multiples: true });
  form.parse(req, (err, fields, files) => {
    console.log("111111");
    if (err) {
      next(err);
      return;
    }

    //Створення об’єкта моделі
    author = {
      name: fields.name,
      age: parseFloat(fields.age),
    };
    req.body.id = fields._id;
    req.body.author = author;
    console.log("req.body.id");
    console.log(req.body.id);
    console.log("req.body.author");
    console.log(req.body.author);
    if (files.photo.originalFilename) {
      //Якщо надіслано нове фото, то змінюємо поле фото
      author.photo = {
        data: fs.readFileSync(files.photo.filepath),
        contentType: files.photo.mimetype,
      };
    }
  });
  form.on("end", function (d) {
    console.log("3333333333");
    num++;
    //Помилка модуля (викликається двічі)
    if (num == 1) {
      //Збереження моделі і відключення від бази даних
      AuthorModel.findByIdAndUpdate(
        req.body.id,
        req.body.author,
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
    }
  });
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
