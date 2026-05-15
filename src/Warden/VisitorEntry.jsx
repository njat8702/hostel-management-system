import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBuilding, FaArrowLeft, FaUsers } from "react-icons/fa6";

export default function VisitorEntry() {
  // 🔥 sample data (replace later with API/backend)
  const [visitorList] = useState([
    {
      visitorName: "Ramesh Sharma",
      studentName: "Aman Gupta",
      roomNumber: "101",
      relation: "Father",
      entryTime: "10:30 AM",
    },
    {
      visitorName: "Neha Verma",
      studentName: "Priya Singh",
      roomNumber: "203",
      relation: "Sister",
      entryTime: "02:15 PM",
    },
    {
      visitorName: "John Doe",
      studentName: "Rahul Yadav",
      roomNumber: "B-12",
      relation: "Friend",
      entryTime: "04:00 PM",
    },
  ]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #dbeafe, #c7d2fe)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav className="navbar bg-white shadow-sm py-3">
        <div className="container">
          <h3 className="fw-bold text-primary mb-0">
            <FaBuilding className="me-2" />
            Visitor Records
          </h3>

          <Link
            to="/warden-dashboard"
            className="btn btn-outline-primary rounded-pill px-4"
          >
            <FaArrowLeft className="me-2" />
            Dashboard
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <div className="container text-center py-5">
        <FaUsers size={50} className="text-primary mb-3" />
        <h1 className="fw-bold" style={{ color: "#4f46e5" }}>
          Visitor Entry Log
        </h1>
        <p className="text-muted">
          All visitor records are maintained by the hostel management system.
        </p>
      </div>

      {/* TABLE */}
      <div className="container pb-5">
        <div className="card shadow-lg border-0 p-4 rounded-4">
          <h4 className="fw-bold text-primary mb-4">
            Visitor History
          </h4>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Visitor Name</th>
                  <th>Student Name</th>
                  <th>Room No</th>
                  <th>Relation</th>
                  <th>Entry Time</th>
                </tr>
              </thead>

              <tbody>
                {visitorList.length > 0 ? (
                  visitorList.map((v, i) => (
                    <tr key={i}>
                      <td className="fw-semibold">{v.visitorName}</td>
                      <td>{v.studentName}</td>
                      <td>{v.roomNumber}</td>
                      <td>{v.relation}</td>
                      <td>{v.entryTime}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center text-muted py-4">
                      No visitor records available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}