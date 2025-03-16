import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AttendanceReport from "./components/AttendanceReport";
import CameraAttendance from "./components/CameraAttendance";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <Navbar />

      {/* Scrolling Message (CSS Animation Instead of Marquee) */}
      <div className="scrolling-container">
        <p className="scrolling-text">
          Welcome to Lendi Attendance Portal - Seamless face recognition-based attendance system.
        </p>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attendance" element={<CameraAttendance />} />
        <Route path="/report" element={<AttendanceReport />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
