const express = require("express");
require("dotenv").config;
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

const parkingRoute = require("./routes/parking");
app.use(parkingRoute);

app.listen(process.env.PORT, (req, res) => {
  console.log("server is on service");
});
