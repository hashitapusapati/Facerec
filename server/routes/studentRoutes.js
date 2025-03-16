const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// Add new student
router.post("/add", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: "Error adding student" });
  }
});

module.exports = router;
