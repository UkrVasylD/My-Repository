const fs = require("fs");
const path = require("path");

// fs.readFile();

// fs.readFile("text.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.readdir("source", (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   data.forEach((item) => {
//     // console.log(item);
//     // console.log(path.extname(item));
//     console.log(fs.statSync("source", item));
//   });
// });

fs.writeFile("test", "ooooooooooo", (err) => {
  if (err) throw err;
  // console.log(data);
});
