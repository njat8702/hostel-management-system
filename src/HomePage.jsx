import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #dbeafe, #c7d2fe)",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      

      {/* Hero Section */}
      <div className="container text-center mt-5">
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#4f46e5",
          }}
        >
          Hostel Management System
        </h1>

        <p
          style={{
            color: "#555",
            maxWidth: "700px",
            margin: "15px auto",
            fontSize: "18px",
          }}
        >
          Simplify hostel administration with student management, fee tracking,
          complaints handling, attendance monitoring, and digital notice updates —
          all in one platform.
        </p>
      </div>

      {/* Cards Section */}
      <div className="container my-5">
        <div className="d-flex justify-content-center gap-5 flex-wrap">

          {/* Student Card */}
          <div className="card shadow-lg"
            style={{
              width: "22rem",
              border: "none",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <img
              src="/Student.jpg"
              className="card-img-top"
              alt="Student"
              style={{ height: "230px", objectFit: "cover" }}
            />

            <div className="card-body">
              <h4 className="card-title fw-bold text-primary">
                Student
              </h4>

              <p className="card-text text-muted">
                Access room details, pay hostel fees, raise complaints, and stay updated.
              </p>
            </div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="fa-solid fa-bed me-2 text-primary"></i>
                View Room Details
              </li>

              <li className="list-group-item">
                <i className="fa-solid fa-credit-card me-2 text-primary"></i>
                Pay Fees
              </li>

              <li className="list-group-item">
                <i className="fa-solid fa-triangle-exclamation me-2 text-primary"></i>
                Raise Complaints
              </li>

              <li className="list-group-item">
                <i className="fa-solid fa-bullhorn me-2 text-primary"></i>
                View Notices
              </li>
            </ul>

            <div className="card-body text-center">
              <Link
                to="/student_portal"
                className="btn shadow"
                style={{
                  background: "#4f46e5",
                  color: "white",
                  borderRadius: "12px",
                  padding: "10px 25px",
                  fontWeight: "bold",
                }}
              >
                Student Portal
              </Link>
            </div>
          </div>

          {/* Warden Card */}
          <div className="card shadow-lg"
            style={{
              width: "22rem",
              border: "none",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <img
              src="/Warden.jpg"
              className="card-img-top"
              alt="Warden"
              style={{ height: "230px", objectFit: "cover" }}
            />

            <div className="card-body">
              <h4 className="card-title fw-bold text-primary">
                Warden
              </h4>

              <p className="card-text text-muted">
                Manage students, attendance, visitor records, complaints, and hostel activities.
              </p>
            </div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Monitor Students
              </li>

              <li className="list-group-item">
                Monitor Attendance
              </li>

              <li className="list-group-item">
                Visitor Entry
              </li>

              <li className="list-group-item">
                Handle Complaints
              </li>
            </ul>

            <div className="card-body text-center">
              <Link
                to="/warden-dashboard"
                className="btn shadow"
                style={{
                  background: "#4f46e5",
                  color: "white",
                  borderRadius: "12px",
                  padding: "10px 25px",
                  fontWeight: "bold",
                }}
              >
                Warden Portal
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer id="footer" className="mt-5 py-5 bg-white shadow-lg">
        <div className="container-fluid px-5">
          <div className="row gy-4">

            <div className="col-lg-4 col-md-6">
              <h3 className="fw-bold text-primary mb-4">
                <i className="fa-solid fa-building me-2"></i>
                Hostel Management
              </h3>

              <p className="text-muted fs-6">
                A centralized platform for managing hostel operations efficiently.
              </p>
            </div>

            <div className="col-lg-2 col-md-6">
              <h5 className="fw-bold text-primary mb-4">Quick Links</h5>

              <ul className="list-unstyled">
                <li className="mb-3">
                  <Link to="/" className="text-decoration-none text-muted">
                    Home
                  </Link>
                </li>

                <li className="mb-3">
                  <Link to="/about" className="text-decoration-none text-muted">
                    About Us
                  </Link>
                </li>

                <li className="mb-3">
                  <Link to="/contact" className="text-decoration-none text-muted">
                    Contact Us
                  </Link>
                </li>

                <li className="mb-3">
                  <Link to="/student_portal" className="text-decoration-none text-muted">
                    Student Portal
                  </Link>
                </li>

                <li className="mb-3">
                  <Link to="/warden-dashboard" className="text-decoration-none text-muted">
                    Warden Portal
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="fw-bold text-primary mb-4">
                Student Services
              </h5>

              <ul className="list-unstyled text-muted">
                <li>Room Allocation</li>
                <li>Fee Payment</li>
                <li>Complaints System</li>
                <li>Notice Board</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="fw-bold text-primary mb-4">
                Contact
              </h5>

              <p className="text-muted">hostel@gmail.com</p>
              <p className="text-muted">+91 9876543210</p>
            </div>

          </div>

          <hr />

          <div className="text-center text-muted">
            © 2026 Hostel Management System
          </div>
        </div>
      </footer>
    </div>
  );
}