const express = require("express");
const Alien = require("../models/alien");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const aliens = await Alien.find();
    res.json(aliens);
  } catch (e) {
    console.log("Error + " + e);
    res.send("Error : " + e);
  }
});

router.post("/", async (req, res) => {
  let alien = new Alien({
    name: req.body.name,
    age: req.body.age,
    empStatus: req.body.empStatus,
  });

  try {
    let save = await alien.save();
    res.json(save);
  } catch (e) {
    res.json("Error : " + e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    console.log("Search Result: " + alien);

    res.json(alien);
  } catch (e) {
    console.log("Error + " + e);
    res.send("... No Records Found! ...");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    alien.empStatus = req.body.empStatus;
    const save = await alien.save();
    res.json(save);
  } catch (e) {
    console.log("Error : " + e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const alien = await Alien.findByIdAndDelete(req.params.id);

    if (!alien) {
      return res.status(404).json({ message: "Alien not found" });
    }

    res.json({
      message: "Alien has been deleted successfully",
    });
  } catch (e) {
    console.error("Error deleting alien:", e);
    res.status(500).json({ message: "Failed to delete alien" });
  }
});

module.exports = router;
