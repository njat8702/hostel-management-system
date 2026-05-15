import React from "react";
import { Link } from "react-router-dom";

export default function AdminLogin() {
  return (
    <div className="container py-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center text-primary fw-bold mb-4">
        Admin Login
      </h2>

      <div className="card shadow p-4">

        <input
          className="form-control mb-3"
          placeholder="Admin Username"
        />

        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
        />

        <Link
          to="/admin-dashboard"
          className="btn btn-primary w-100"
        >
          Login
        </Link>

      </div>
    </div>
  );
}