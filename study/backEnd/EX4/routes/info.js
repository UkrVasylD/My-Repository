var express = require("express");
var router = express.Router();
const data = require("./data.json");

router.get("/:myLinks", function (req, res, next) {
  const myLinks = req.params.myLinks;
  console.log(data.favoriteSiteAddress);
  if (myLinks == "site") {
    res.render("info", {
      title: "favorite Site Address",
      items: data.favoriteSiteAddress,
    });
  } else if (myLinks == "films") {
    res.render("info", {
      title: "favorite Films Site",
      items: data.favoriteFilmsSite,
    });
  } else if (myLinks == "about") {
    res.render("info", {
      title: "about Yor Self",
      items: data.aboutYorSwlf,
    });
  } else {
    res.render("info", {
      title: "No data",
      items: [1, 2, 3],
    });
  }
  // switch (myLinks) {
  //   case myLinks == "site":
  //     res.render("info", {
  //       title: "favorite Site Address",
  //       items: data.favoriteSiteAddress,
  //     });

  //     break;
  //   case myLinks == "films":
  //     res.render("info", {
  //       title: "favorite Films Site",
  //       items: data.favoriteFilmsSite,
  //     });

  //     break;
  //   case myLinks == "about":
  //     res.render("info", {
  //       title: "about Yor Self",
  //       items: data.aboutYorSwlf,
  //     });
  //   default:
  //     res.render("info", {
  //       title: "No data",
  //     });
  //     break;
  // }
  // res.render("info", {
  //   title: "No data",
  //   items: [1, 2, 3],
  // });
});

module.exports = router;
