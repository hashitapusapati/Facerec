const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");

// Mark attendance
router.post("/mark", async (req, res) => {
  try {
    const attendance = new Attendance(req.body);
    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    res.status(400).json({ error: "Error marking attendance" });
  }
});

module.exports = router;
