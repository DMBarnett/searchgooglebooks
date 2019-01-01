const express = require("express");
const router = express.Router();

const dbcontroller = require("../../controller/dbcontroller");

router.route("/")
  .get(dbcontroller.findAll)
  .post(dbcontroller.create);

router.route("/:id")
  .get(dbcontroller.findById)
  .put(dbcontroller.update)
  .delete(dbcontroller.delete);

module.exports = router;