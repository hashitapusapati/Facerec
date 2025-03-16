const { spawn } = require("child_process");
const path = require("path");

const detectFace = (imagePath) => {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn("python", [
      path.join(__dirname, "face_recognition.py"),
      imagePath,
    ]);

    pythonProcess.stdout.on("data", (data) => {
      resolve(data.toString());
    });

    pythonProcess.stderr.on("data", (error) => {
      reject(error.toString());
    });
  });
};

module.exports = { detectFace };
