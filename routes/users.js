var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send({ myown: "distributing things in the hands of many" });
});

module.exports = router;
