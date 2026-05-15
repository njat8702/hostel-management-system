import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function WardenRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    wardenId: "",
    hostelBlock: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    // Full Name (min 3 letters, only alphabets allowed)
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (!/^[A-Za-z ]{3,}$/.test(formData.fullName)) {
      newErrors.fullName =
        "Name must be at least 3 letters and contain only alphabets";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    // Warden ID (exact 4-6 digits)
    if (!formData.wardenId.trim()) {
      newErrors.wardenId = "Warden ID is required";
    } else if (!/^\d{4,6}$/.test(formData.wardenId)) {
      newErrors.wardenId = "Warden ID must be 4 to 6 digits";
    }

    // Hostel Block
    if (!formData.hostelBlock) {
      newErrors.hostelBlock = "Please select hostel block";
    }

    // Password (strong validation)
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (!/[A-Za-z]/.test(formData.password) || !/[0-9]/.test(formData.password)) {
      newErrors.password =
        "Password must contain letters and numbers";
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      navigate("/warden-login");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #dbeafe, #c7d2fe)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        className="card shadow-lg border-0"
        style={{
          width: "100%",
          maxWidth: "550px",
          borderRadius: "25px",
          overflow: "hidden",
        }}
      >
        {/* HEADER */}
        <div
          className="text-center text-white"
          style={{
            background: "#4f46e5",
            padding: "30px",
          }}
        >
          <h2 className="fw-bold">Warden Registration</h2>
          <p className="mb-0">Create your account</p>
        </div>

        {/* FORM */}
        <div className="card-body p-4">

          <form onSubmit={handleSubmit}>

            {/* FULL NAME */}
            <div className="mb-3">
              <input
                type="text"
                name="fullName"
                className="form-control"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <small className="text-danger">{errors.fullName}</small>
              )}
            </div>

            {/* EMAIL */}
            <div className="mb-3">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>

            {/* WARDEN ID */}
            <div className="mb-3">
              <input
                type="text"
                name="wardenId"
                className="form-control"
                placeholder="Warden ID (4-6 digits)"
                value={formData.wardenId}
                onChange={handleChange}
              />
              {errors.wardenId && (
                <small className="text-danger">{errors.wardenId}</small>
              )}
            </div>

            {/* HOSTEL BLOCK */}
            <div className="mb-3">
              <select
                name="hostelBlock"
                className="form-select"
                value={formData.hostelBlock}
                onChange={handleChange}
              >
                <option value="">Select Hostel Block</option>
                <option>Block A</option>
                <option>Block B</option>
                <option>Block C</option>
                <option>Girls Hostel</option>
                <option>Boys Hostel</option>
              </select>
              {errors.hostelBlock && (
                <small className="text-danger">{errors.hostelBlock}</small>
              )}
            </div>

            {/* PASSWORD */}
            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <small className="text-danger">{errors.password}</small>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="mb-3">
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <small className="text-danger">
                  {errors.confirmPassword}
                </small>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="btn w-100"
              style={{
                background: "#4f46e5",
                color: "white",
                borderRadius: "12px",
                padding: "12px",
                fontWeight: "bold",
              }}
            >
              Register
            </button>
          </form>

          {/* LOGIN LINK */}
          <p className="text-center mt-3 text-muted">
            Already have an account?{" "}
            <Link
              to="/warden-login"
              className="fw-bold text-decoration-none"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default WardenRegister;
