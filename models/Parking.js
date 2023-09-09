const mongoose = require("mongoose");

const Parking = mongoose.model("Parking", {
  name: String,
  places: Number,
});

module.exports = Parking;
