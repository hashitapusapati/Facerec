import React, { useRef, useState } from "react";
import "../styles/styles.css";
import Dashboard from "./Dashboard"; // Import Dashboard

const CameraAttendance = () => {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsCameraOn(true);
    } catch (error) {
      alert("Error accessing camera: " + error.message);
    }
  };

  const captureImage = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL("image/png");
    setCapturedImage(imageData);
  };

  const sendToServer = async () => {
    if (!capturedImage) {
      alert("No image captured!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/mark_attendance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ student_id: "123", image: capturedImage.split(",")[1] }),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert("Error sending data: " + error.message);
    }
  };

  return (
    <div className="camera-container">
      <h2>Camera Attendance</h2>
      <video ref={videoRef} autoPlay style={{ display: isCameraOn ? "block" : "none" }}></video>
      <button className="btn-primary" onClick={startCamera}>
        {isCameraOn ? "Camera On" : "Start Camera"}
      </button>
      {isCameraOn && (
        <>
          <button className="btn-secondary" onClick={captureImage}>
            Capture Image
          </button>
          <button className="btn-success" onClick={sendToServer}>
            Mark Attendance
          </button>
        </>
      )}
      {capturedImage && <img src={capturedImage} alt="Captured" />}
      
      {/* Include Dashboard below */}
      <Dashboard />
    </div>
  );
};

export default CameraAttendance;
