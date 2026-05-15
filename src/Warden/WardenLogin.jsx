import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function WardenLogin() {
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

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    // Password
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
      navigate("/warden-dashboard");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(to right, #dbeafe, #c7d2fe)",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        className="card shadow-lg border-0"
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <div className="row g-0">

          {/* LEFT SIDE */}
          <div
            className="col-md-6 text-white p-5"
            style={{ background: "#4f46e5" }}
          >
            <h2 className="fw-bold mb-3">Warden Portal</h2>

            <p>
              Manage hostel students, attendance, complaints, and activities
              from one dashboard.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6 p-5 bg-white">

            <h3 className="fw-bold text-primary mb-3">
              Warden Login
            </h3>

            <form onSubmit={handleSubmit}>

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
                  className="form-control"
                  placeholder="Password"
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
              <button
                type="submit"
                className="btn w-100"
                style={{
                  background: "#4f46e5",
                  color: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                Login
              </button>
            </form>

            {/* REGISTER LINK */}
            <p className="text-center mt-3">
              Not registered?{" "}
              <Link to="/warden-register" className="fw-bold">
                Create Account
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default WardenLogin;