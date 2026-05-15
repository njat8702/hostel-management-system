import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function StudentRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    // NAME
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name must contain only letters";
    }

    // EMAIL
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    // STUDENT ID
    if (!formData.studentId.trim()) {
      newErrors.studentId = "Student ID is required";
    } else if (!/^\d{4}$/.test(formData.studentId)) {
      newErrors.studentId = "Student ID must be exactly 4 digits";
    }

    // PASSWORD
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // CONFIRM PASSWORD
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Registration successful!");
      setFormData({
        name: "",
        email: "",
        studentId: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #dbeafe, #c7d2fe)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial",
      }}
    >
      <div className="card shadow-lg" style={{ width: "100%", maxWidth: "500px" }}>

        {/* HEADER */}
        <div className="bg-primary text-white text-center p-4">
          <h3>Student Registration</h3>
        </div>

        {/* FORM */}
        <div className="p-4">

          <form onSubmit={handleSubmit}>

            {/* NAME */}
            <div className="mb-3">
              <label className="fw-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <small className="text-danger">{errors.name}</small>
              )}
            </div>

            {/* EMAIL */}
            <div className="mb-3">
              <label className="fw-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>

            {/* STUDENT ID */}
            <div className="mb-3">
              <label className="fw-semibold">Student ID</label>
              <input
                type="text"
                name="studentId"
                className="form-control"
                value={formData.studentId}
                onChange={handleChange}
              />
              {errors.studentId && (
                <small className="text-danger">{errors.studentId}</small>
              )}
            </div>

            {/* PASSWORD */}
            <div className="mb-3">
              <label className="fw-semibold">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <small className="text-danger">{errors.password}</small>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="mb-3">
              <label className="fw-semibold">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
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
            <button className="btn btn-primary w-100">
              Register
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}