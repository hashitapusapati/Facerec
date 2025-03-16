const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  studentId: String,
  faceEncoding: String, // Store face encoding as a string
});

module.exports = mongoose.model("Student", StudentSchema);
