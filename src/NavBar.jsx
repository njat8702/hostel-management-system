import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg shadow-sm bg-white">
        <div className="container">
          <Link className="navbar-brand fw-bold text-primary" to="/">
            <i className="fa-solid fa-building me-2"></i>
            Hostel Management
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active fw-semibold" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/about">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/contact">
                  Contact Us
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-semibold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Login
                </a>

                <ul className="dropdown-menu shadow border-0">
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Student Login
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/warden-login">
                      Warden Login
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
