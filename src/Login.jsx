import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";

export default function StudentLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      navigate("/student_portal");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #dbeafe, #c7d2fe)",
        fontFamily: "Arial",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "400px",
          borderRadius: "15px",
        }}
      >

        {/* TITLE */}
        <h3 className="text-center text-primary fw-bold mb-3">
          Student Login
        </h3>

        <p className="text-center text-muted mb-4">
          Login to access your hostel dashboard
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit}>

          {/* EMAIL */}
          <div className="mb-3">
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <small className="text-danger">
                {errors.email}
              </small>
            )}
          </div>

          {/* PASSWORD */}
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <small className="text-danger">
                {errors.password}
              </small>
            )}
          </div>

          {/* LOGIN BUTTON */}
          <button className="btn btn-primary w-100">
            Login
          </button>

        </form>

        {/* REGISTER LINK */}
        <p className="text-center mt-3 mb-0">
          Not registered?{" "}
          <Link
            to="/register"
            className="text-decoration-none fw-semibold text-primary"
          >
            Create Account
          </Link>
        </p>

      </div>
    </div>
  );
}