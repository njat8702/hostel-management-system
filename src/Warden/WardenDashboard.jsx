import React from "react";
import {
  FaUsers,
  FaCalendarCheck,
  FaUserCheck,
  FaScrewdriverWrench,
  FaRightFromBracket,
  FaBuilding,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

export default function WardenDashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #dbeafe, #c7d2fe)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand fw-bold text-primary text-decoration-none"
          >
            <FaBuilding className="me-2" />
            Warden Dashboard
          </Link>

          <Link
            to="/"
            className="btn btn-outline-primary rounded-pill px-4"
          >
            <FaRightFromBracket className="me-2" />
            Logout
          </Link>
        </div>
      </nav>

      {/* Welcome Section */}
      <div className="container text-center py-5">
        <h1 className="fw-bold" style={{ color: "#4f46e5", fontSize: "45px" }}>
          Welcome, Warden!
        </h1>

        <p className="text-muted fs-5">
          Manage hostel activities and student records efficiently.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="container pb-5">
        <div className="row g-4">

          {/* Monitor Students */}
          <div className="col-lg-3 col-md-6">
            <Link to="/monitor-students" className="text-decoration-none">
              <div className="card border-0 shadow-lg h-100 text-center p-4" style={{ borderRadius: "20px" }}>
                <div className="mx-auto mb-4" style={iconStyle}>
                  <FaUsers />
                </div>
                <div className="card-body">
                  <h4 className="fw-bold" style={{ color: "#4f46e5" }}>
                    Monitor Students
                  </h4>
                  <p className="text-muted">
                    View and manage student records and room details.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Attendance */}
          <div className="col-lg-3 col-md-6">
            <Link to="/attendance" className="text-decoration-none">
              <div className="card border-0 shadow-lg h-100 text-center p-4" style={{ borderRadius: "20px" }}>
                <div className="mx-auto mb-4" style={iconStyle}>
                  <FaCalendarCheck />
                </div>
                <div className="card-body">
                  <h4 className="fw-bold" style={{ color: "#4f46e5" }}>
                    Attendance
                  </h4>
                  <p className="text-muted">
                    Track and manage hostel attendance records.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Visitor Entry */}
          <div className="col-lg-3 col-md-6">
            <Link to="/visitor-entry" className="text-decoration-none">
              <div className="card border-0 shadow-lg h-100 text-center p-4" style={{ borderRadius: "20px" }}>
                <div className="mx-auto mb-4" style={iconStyle}>
                  <FaUserCheck />
                </div>
                <div className="card-body">
                  <h4 className="fw-bold" style={{ color: "#4f46e5" }}>
                    Visitor Entry
                  </h4>
                  <p className="text-muted">
                    Maintain visitor logs and entry records.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Complaint Management (UPDATED) */}
          <div className="col-lg-3 col-md-6">
            <Link to="/warden-complaints" className="text-decoration-none">
              <div className="card border-0 shadow-lg h-100 text-center p-4" style={{ borderRadius: "20px" }}>
                <div className="mx-auto mb-4" style={iconStyle}>
                  <FaScrewdriverWrench />
                </div>
                <div className="card-body">
                  <h4 className="fw-bold" style={{ color: "#4f46e5" }}>
                    Complaint Management
                  </h4>
                  <p className="text-muted">
                    Review and resolve student complaints efficiently.
                  </p>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

const iconStyle = {
  width: "90px",
  height: "90px",
  borderRadius: "50%",
  background: "#eef2ff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "35px",
  color: "#4f46e5",
};