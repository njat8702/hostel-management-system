import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div style={{ background: "#f4f6ff", minHeight: "100vh" }}>

      {/* HEADER */}
      <div
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(to right, #4f46e5, #6366f1)",
        }}
      >
        <h1 className="fw-bold">Admin Dashboard</h1>
        <p className="mb-0">Control and manage entire hostel system</p>
      </div>

      <div className="container py-5">

        {/* STATS CARDS */}
        <div className="row g-4 mb-5">

          <div className="col-md-3">
            <div className="card shadow text-center p-3 border-0">
              <h6>Total Students</h6>
              <h2 className="text-primary fw-bold">120</h2>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow text-center p-3 border-0">
              <h6>Total Wardens</h6>
              <h2 className="text-success fw-bold">5</h2>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow text-center p-3 border-0">
              <h6>Complaints</h6>
              <h2 className="text-danger fw-bold">8</h2>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow text-center p-3 border-0">
              <h6>Rooms</h6>
              <h2 className="text-warning fw-bold">50</h2>
            </div>
          </div>

        </div>

        {/* NAVIGATION CARDS */}
        <div className="row g-4">

          <div className="col-md-3">
            <Link to="/manage-users" className="text-decoration-none">
              <div className="card p-4 text-center shadow-sm admin-card">
                <h5 className="fw-bold text-primary">Manage Users</h5>
                <p className="text-muted">Students & Wardens</p>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/manage-rooms" className="text-decoration-none">
              <div className="card p-4 text-center shadow-sm admin-card">
                <h5 className="fw-bold text-primary">Rooms</h5>
                <p className="text-muted">Room allocation system</p>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/admin-complaints" className="text-decoration-none">
              <div className="card p-4 text-center shadow-sm admin-card">
                <h5 className="fw-bold text-primary">Complaints</h5>
                <p className="text-muted">Resolve hostel issues</p>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/admin-attendance" className="text-decoration-none">
              <div className="card p-4 text-center shadow-sm admin-card">
                <h5 className="fw-bold text-primary">Attendance</h5>
                <p className="text-muted">Monitor student attendance</p>
              </div>
            </Link>
          </div>

        </div>
      </div>

      {/* HOVER STYLE */}
      <style>{`
        .admin-card {
          transition: 0.3s ease;
          border-radius: 15px;
        }
        .admin-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
      `}</style>

    </div>
  );
}