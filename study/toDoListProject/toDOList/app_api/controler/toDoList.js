const toDoListModel = require("../models/toDoList");
const formidable = require("formidable");

const sendJSONResponse = (res, status, content) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(status).json(content);
};

module.exports.getList = function (req, res, next) {
  toDoListModel.find({}, function (err, taskList) {
    if (err)
      return sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Fetch faild!" },
      });

    sendJSONResponse(res, 200, { success: true, data: taskList });
  });
};

module.exports.addTask = function (req, res, next) {
  let task;
  const form = formidable({ multiples: true });
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    task = new toDoListModel({
      title: fields.title,
      description: fields.description,
    });
  });
  form.on("end", function (d) {
    console.log("3333333333");
    //Збереження моделі і відключення від бази даних
    task.save(function (err, savedTask) {
      if (err) {
        sendJSONResponse(res, 500, {
          success: false,
          err: { msg: "Saving faild!" },
        });
        return;
      }
      sendJSONResponse(res, 201, { success: true, data: savedTask });
    });
  });
};
