const express = require("express");
const router = express.Router();

const dbcontroller = require("../../controller/dbcontroller");

router.route("/")
  .get(dbcontroller)
  .post(dbcontroller);

router.route("/:id")
  .get(dbcontroller)
  .put(dbcontroller)
  .delete(dbcontroller);

module.exports = router;