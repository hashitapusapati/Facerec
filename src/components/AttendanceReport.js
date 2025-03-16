import React, { useEffect, useState } from "react";
import "../styles/styles.css";

const AttendanceReport = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await fetch("https://api.example.com/attendance");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setAttendanceData(data);
        setError(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);

        // Fallback Dummy Data
        setAttendanceData([
          { id: 1, name: "Paida Srija Vagdevi", regNo: "21KD1A05D3", status: "Absent" },
        { id: 2, name: "Paluri Manasa", regNo: "21KD1A05D4", status: "Absent" },
        { id: 3, name: "Nandini Patnaikuni", regNo: "21KD1A05D5", status: "Absent" },
        { id: 4, name: "Pedada Pavan Kumar", regNo: "21KD1A05D6", status: "Absent" },
        { id: 5, name: "Peketi Satya Sai Prasad", regNo: "21KD1A05D7", status: "Absent" },
        { id: 6, name: "Penumatsa Lahari", regNo: "21KD1A05D8", status: "Absent" },
        { id: 7, name: "Penumatsa Sai Surya Sita Rama Varma", regNo: "21KD1A05D9", status: "Absent" },
        { id: 8, name: "Perapu Teja", regNo: "21KD1A05E0", status: "Absent" },
        { id: 9, name: "Podugu Bhanu Yaswanth", regNo: "21KD1A05E1", status: "Absent" },
        { id: 10, name: "Abhisha Ponnaganti", regNo: "21KD1A05E2", status: "Absent" },
        { id: 11, name: "Porapu Naveen Kumar", regNo: "21KD1A05E3", status: "Absent" },
        { id: 12, name: "Pothala Saikiran", regNo: "21KD1A05E4", status: "Absent" },
        { id: 13, name: "Pusapati Hashita", regNo: "21KD1A05E5", status: "Absent" },
        { id: 14, name: "P Sai Gowtham", regNo: "21KD1A05E6", status: "Absent" },
        { id: 15, name: "Venkata Siddardha Rali", regNo: "21KD1A05E7", status: "Absent" },
        { id: 16, name: "R Jasmin Kumari", regNo: "21KD1A05E8", status: "Absent" },
        { id: 17, name: "Rayi Bharath", regNo: "21KD1A05E9", status: "Absent" },
        { id: 18, name: "Relli Jagadeesh", regNo: "21KD1A05F0", status: "Absent" },
        { id: 19, name: "Reshma Tejeswani Patarapalli", regNo: "21KD1A05F1", status: "Absent" },
        { id: 20, name: "Rongali Sowjanya", regNo: "21KD1A05F2", status: "Absent" },
        { id: 21, name: "Routhu Suresh", regNo: "21KD1A05F3", status: "Absent" },
        { id: 22, name: "Sagi Neha", regNo: "21KD1A05F4", status: "Absent" },
        { id: 23, name: "Sahini Dinakar Srinivas", regNo: "21KD1A05F5", status: "Absent" },
        { id: 24, name: "Sahu Sumendra Kumar", regNo: "21KD1A05F6", status: "Absent" },
        { id: 25, name: "Samadula Bhavani", regNo: "21KD1A05F7", status: "Absent" },
        { id: 26, name: "Sangamreddy Varun Teja", regNo: "21KD1A05F8", status: "Absent" },
        { id: 27, name: "Sappati Sai Satwik", regNo: "21KD1A05F9", status: "Absent" },
        { id: 28, name: "Shaik Abdul Hafeez", regNo: "21KD1A05G0", status: "Absent" },
        { id: 29, name: "Shaik Abdul Khadar Jeelani", regNo: "21KD1A05G1", status: "Absent" },
        { id: 30, name: "Shaik Parveen", regNo: "21KD1A05G2", status: "Absent" },
        { id: 31, name: "Sikakollu Rajesh", regNo: "21KD1A05G3", status: "Absent" },
        { id: 32, name: "Simmala Manamma", regNo: "21KD1A05G4", status: "Absent" },
        { id: 33, name: "Singampalli Diya Sarvagnya", regNo: "21KD1A05G5", status: "Absent" },
        { id: 34, name: "Sirugudi Sarvani", regNo: "21KD1A05G6", status: "Absent" },
        { id: 35, name: "Suru Sirishma", regNo: "21KD1A05G7", status: "Absent" },
        { id: 36, name: "Talari Venkata Sai Niteesh", regNo: "21KD1A05G8", status: "Absent" },
        { id: 37, name: "Talla Reshma", regNo: "21KD1A05G9", status: "Absent" },
        { id: 38, name: "Tallada Dhanunjay", regNo: "21KD1A05H0", status: "Absent" },
        { id: 39, name: "Tamarapalli Kiran Kumar", regNo: "21KD1A05H1", status: "Absent" },
        { id: 40, name: "Tata Sai Sampath", regNo: "21KD1A05H2", status: "Absent" },
        { id: 41, name: "Tata Sriraj", regNo: "21KD1A05H3", status: "Absent" },
        { id: 42, name: "Tavva Vasanth", regNo: "21KD1A05H4", status: "Absent" },
        { id: 43, name: "T Srihitha Jhansi", regNo: "21KD1A05H5", status: "Absent" },
        { id: 44, name: "Temburu Bhaskara Rao", regNo: "21KD1A05H6", status: "Absent" },
{ id: 45, name: "Tenkam Sai Durga", regNo: "21KD1A05H7", status: "Absent" },
{ id: 46, name: "Tenneti Satyasai Venkatesh Srikar", regNo: "21KD1A05H8", status: "Absent" },
{ id: 47, name: "Thammina. Tejaswi", regNo: "21KD1A05H9", status: "Absent" },
{ id: 48, name: "Tholapu.Dhanalakshmi", regNo: "21KD1A05I0", status: "Absent" },
{ id: 49, name: "Thota Roshini Rachel", regNo: "21KD1A05I1", status: "Absent" },
{ id: 50, name: "Tirumalaraju Radha Krishna Varma", regNo: "21KD1A05I2", status: "Absent" },
{ id: 51, name: "Tottara Dhanush ", regNo: "21KD1A05I3", status: "Absent" },
{ id: 52, name: "Turupada Manogyna", regNo: "21KD1A05I4", status: "Absent" },
{ id: 53, name: "Ungarala Dileep Kumar", regNo: "21KD1A05I5", status: "Absent" },
{ id: 54, name: "Valle Likhitha", regNo: "21KD1A05I6", status: "Absent" },
{ id: 55, name: "Vallepu Sai Srinivas", regNo: "21KD1A05I7", status: "Absent" },
{ id: 56, name: "Varri Mrudula ", regNo: "21KD1A05I8", status: "Absent" },
{ id: 57, name: "VEMULA VENKATASAI ", regNo: "21KD1A05I9", status: "Absent" },
{ id: 58, name: "Vendra Himaja", regNo: "21KD1A05J0", status: "Absent" },
{ id: 59, name: "VETLA ESWARA RAO", regNo: "21KD1A05J1", status: "Absent" },
{ id: 60, name: "vobbilisetty hemanth", regNo: "21KD1A05J2", status: "Absent" },
{ id: 61, name: "vudiga sachin ", regNo: "21KD1A05J3", status: "Absent" },
{ id: 62, name: "Yalla purna chandra vinay kumar", regNo: "21KD1A05J4", status: "Absent" },
{ id: 63, name: "Yeduvaka Gayithri ", regNo: "21KD1A05J5", status: "Absent" },
{ id: 64, name: "yenduva Sireesha ", regNo: "21KD1A05J6", status: "Absent" },
{ id: 65, name: "Vobbilisetty Sudarshan ", regNo: "21KD1A05J7", status: "Absent" },
{ id: 66, name: "B.mohan bhagavan", regNo: "21KD1A05J8", status: "Absent" },
{ id: 67, name: "D. chandu", regNo: "21KD1A05J9", status: "Absent" },
{ id: 68, name: "G Sai madhuri ", regNo: "21KD1A05K0", status: "Absent" },
{ id: 69, name: "P.TARUN", regNo: "21KD1A05K1", status: "Absent" },
{ id: 70, name: "R.hemalatha", regNo: "21KD1A05K2", status: "Absent" },
{ id: 71, name: "Varanasi upendra ", regNo: "21KD1A05K3", status: "Absent" }
        ]);
      }
    };

    fetchAttendance();
  }, []);

  // Filter data based on search input
  const filteredData = attendanceData.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.regNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="attendance-container">
      <h2 className="report-title">Attendance Report</h2>

      {/* Show error message if API fails */}
      {error && <p className="error-message">⚠ Could not fetch data. Showing fallback data.</p>}

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by Name or Reg No..."
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Table */}
      <div className="table-container">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Reg No</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((student, index) => (
                <tr key={student.id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.regNo}</td>
                  <td className={student.status === "Absent" ? "status-absent" : "status-present"}>
                    {student.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-data">No matching records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceReport;