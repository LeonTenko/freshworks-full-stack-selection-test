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

// @route  POST api/duckfeedings
// @desc   creates a new duckfeeding entry with the posted
//         data.
// @access Public
router.post("/", async (req, res) => {
  try {
    const { feedingTime, foodType, feedingLocation, duckCount, foodAmountKg } =
      req.body;

    const duckFeedingEntry = new DuckFeeding({
      feedingTime,
      foodType,
      feedingLocation,
      duckCount,
      foodAmountKg,
    });

    await duckFeedingEntry.save();
    res.status(200).send(duckFeedingEntry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
