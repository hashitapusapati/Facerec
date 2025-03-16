import React, { useState } from "react";
import "../styles/styles.css";

const AttendanceForm = () => {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Attendance recorded for ${name}`);
  };

  return (
    <div className="form-container">
      <h2>Mark Attendance</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AttendanceForm;
