const mongoose = require("mongoose");

const DuckFeedingSchema = new mongoose.Schema({
  feedingTime: {
    type: Date,
    required: true,
  },
  foodType: {
    type: String,
    required: true,
  },
  feedingLocation: {
    type: String,
    required: true,
  },
  duckCount: {
    type: Number,
    required: true,
  },
  foodAmountKg: {
    type: Number,
    required: true,
  },
});

const DuckFeeding = mongoose.model("duckFeeding", DuckFeedingSchema);

module.exports = DuckFeeding;
