const express = require("express");
const router = express.Router();

const DuckFeeding = require("../../models/DuckFeeding");

// @route  GET api/duckfeedings
// @desc   Retrieves all duckfeeding entries
// @access Public
router.get("/", (req, res) => {
  DuckFeeding.find({}, (err, duckFeedings) => {
    res.send(duckFeedings);
  });
});

module.exports = router;