import React from "react";

export default function Footer() {
  return (
    <footer className="mt-5 py-5 bg-white shadow-lg">
      <div className="container-fluid px-5">

        <div className="row gy-4">

          <div className="col-lg-4 col-md-6">
            <h3 className="fw-bold text-primary mb-4">
              <i className="fa-solid fa-building me-2"></i>
              Hostel Management
            </h3>

            <p className="text-muted fs-6">
              A centralized hostel management platform for students and wardens.
            </p>

            <div className="mt-4">
              <a href="#" className="text-primary fs-4 me-3"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="text-primary fs-4 me-3"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="text-primary fs-4 me-3"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#" className="text-primary fs-4"><i className="fa-brands fa-twitter"></i></a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold text-primary mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2 text-muted">Home</li>
              <li className="mb-2 text-muted">About</li>
              <li className="mb-2 text-muted">Student Portal</li>
              <li className="mb-2 text-muted">Warden Portal</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold text-primary mb-4">Services</h5>
            <ul className="list-unstyled">
              <li className="text-muted">Room Allocation</li>
              <li className="text-muted">Fee Payment</li>
              <li className="text-muted">Complaints</li>
              <li className="text-muted">Notices</li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold text-primary mb-4">Contact</h5>
            <p className="text-muted">hostel@gmail.com</p>
            <p className="text-muted">+91 9876543210</p>
          </div>

        </div>

        <hr className="my-4" />

        <p className="text-center text-muted">
          © 2026 Hostel Management System
        </p>

      </div>
    </footer>
  );
}