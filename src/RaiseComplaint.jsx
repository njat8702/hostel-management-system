import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function RaiseComplaint() {
  const [formData, setFormData] = useState({
    name: "",
    room: "",
    category: "Electricity Issue",
    title: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    // NAME
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name must contain only letters";
    }

    // ROOM NUMBER
    if (!formData.room.trim()) {
      newErrors.room = "Room number is required";
    } else if (!/^[A-Za-z0-9]+$/.test(formData.room)) {
      newErrors.room = "Room must be alphanumeric (e.g. A101)";
    }

    // TITLE
    if (!formData.title.trim()) {
      newErrors.title = "Complaint title is required";
    } else if (formData.title.length < 5) {
      newErrors.title = "Title must be at least 5 characters";
    }

    // DESCRIPTION
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Complaint submitted successfully!");
      setFormData({
        name: "",
        room: "",
        category: "Electricity Issue",
        title: "",
        description: "",
      });
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #dbeafe, #c7d2fe)",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <div className="container py-5">
        <div className="card shadow p-4">

          <h2 className="text-center text-primary mb-4">
            Raise Complaint
          </h2>

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
                <small className="text-danger">
                  {errors.name}
                </small>
              )}
            </div>

            {/* ROOM */}
            <div className="mb-3">
              <label className="fw-semibold">Room Number</label>
              <input
                type="text"
                name="room"
                className="form-control"
                value={formData.room}
                onChange={handleChange}
              />
              {errors.room && (
                <small className="text-danger">
                  {errors.room}
                </small>
              )}
            </div>

            {/* CATEGORY */}
            <div className="mb-3">
              <label className="fw-semibold">
                Complaint Category
              </label>
              <select
                name="category"
                className="form-select"
                value={formData.category}
                onChange={handleChange}
              >
                <option>Electricity Issue</option>
                <option>Water Supply</option>
                <option>Room Cleaning</option>
                <option>Furniture Damage</option>
                <option>WiFi Issue</option>
                <option>Other</option>
              </select>
            </div>

            {/* TITLE */}
            <div className="mb-3">
              <label className="fw-semibold">
                Complaint Title
              </label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
              />
              {errors.title && (
                <small className="text-danger">
                  {errors.title}
                </small>
              )}
            </div>

            {/* DESCRIPTION */}
            <div className="mb-3">
              <label className="fw-semibold">
                Complaint Description
              </label>
              <textarea
                rows="4"
                name="description"
                className="form-control"
                value={formData.description}
                onChange={handleChange}
              />
              {errors.description && (
                <small className="text-danger">
                  {errors.description}
                </small>
              )}
            </div>

            {/* SUBMIT */}
            <button className="btn btn-primary w-100">
              Submit Complaint
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}