import React from "react";

export default function AboutUs() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f8fafc" }}>
      
      {/* HERO SECTION */}
      <div
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(to right, #4f46e5, #6366f1)",
        }}
      >
        <h1 className="fw-bold">About Our Hostel Management System</h1>
        <p className="mt-3 fs-5">
          A smart, digital platform to simplify hostel operations for students and wardens
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="container py-5">

        {/* INTRO CARD */}
        <div className="card shadow-lg border-0 mb-4">
          <div className="card-body p-4">
            <h3 className="text-primary fw-bold">Who We Are</h3>
            <p className="text-muted mt-2">
              We are building a modern hostel management system that replaces manual
              paperwork with a fully digital, efficient, and transparent platform.
              Our goal is to improve communication between students and wardens
              while automating daily hostel operations.
            </p>
          </div>
        </div>

        {/* FEATURES */}
        <div className="row g-4">

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center p-3">
              <h5 className="text-primary fw-bold">Student Portal</h5>
              <p className="text-muted">
                Manage fees, complaints, room details, and notices in one place.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center p-3">
              <h5 className="text-primary fw-bold">Warden Control</h5>
              <p className="text-muted">
                Monitor students, attendance, visitors, and resolve complaints easily.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center p-3">
              <h5 className="text-primary fw-bold">Digital System</h5>
              <p className="text-muted">
                Fully digital system replacing manual records with real-time updates.
              </p>
            </div>
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="row text-center mt-5 g-4">

          <div className="col-md-4">
            <div className="card shadow border-0 p-4">
              <h2 className="text-primary fw-bold">100%</h2>
              <p className="text-muted">Digital Management</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0 p-4">
              <h2 className="text-primary fw-bold">24/7</h2>
              <p className="text-muted">System Availability</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0 p-4">
              <h2 className="text-primary fw-bold">Fast</h2>
              <p className="text-muted">Complaint Resolution</p>
            </div>
          </div>

        </div>

        {/* FOOTER NOTE */}
        <div className="text-center mt-5">
          <h5 className="fw-bold text-dark">
            Built with React + Bootstrap for Modern Hostel Management
          </h5>
          <p className="text-muted">
            Simple. Fast. Efficient.
          </p>
        </div>

      </div>
    </div>
  );
}