const express = require("express");

const router = express.Router();

const Parking = require("../models/Parking");

router.post("/Parking/create", async (req, res) => {
  try {
    const { name, places } = req.body;
    const parkingA = new Parking({
      name: name,
      places: places,
    });
    await parkingA.save();
    res.json(parkingA);
    console.log(parkingA);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/Parking/list", async (req, res) => {
  try {
    const parkingList = await Parking.find(req.params);
    res.json(parkingList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/Parking/update", async (req, res) => {
  try {
    if (req.body.id && req.body.places) {
      const updateParking = await Parking.findByIdAndUpdate(
        { _id: req.body.id },
        { places: req.body.places }
      );

      await updateParking.save();
      res.json({ message: "Parking updated" });
    } else {
      res.json({ message: "missing parameters" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/Parking/delete", async (req, res) => {
  try {
    await Parking.findOne(req.body.id);
    if (req.body.id !== null) {
      res.json({ message: "Parking deleted" });
    } else {
      res.json({ message: "missing id" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
