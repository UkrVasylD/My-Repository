const formidable = require("formidable");
const BookModel = require("../models/book");
const fs = require("fs");

const sendJSONResponse = (res, status, content) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(status).json(content);
};

module.exports.getList = function (req, res) {
  const searchObj = req.query.searchParams || {};

  BookModel.find(searchObj, function (err, books) {
    if (err)
      return sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Fetch faild!" },
      });

    sendJSONResponse(res, 200, { success: true, data: books });
  });
};

module.exports.getList = function (req, res, next) {
  res.render("index", { title: "Express" });
};
