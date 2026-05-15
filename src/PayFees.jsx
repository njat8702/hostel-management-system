import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function PayHostelFees() {
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    roomType: "",
    paymentMethod: "",
  });

  const [feeAmount, setFeeAmount] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // Fee calculation
    if (name === "roomType") {
      if (value === "60000") setFeeAmount("₹ 60000 / year");
      else if (value === "45000") setFeeAmount("₹ 45000 / year");
      else if (value === "35000") setFeeAmount("₹ 35000 / year");
      else setFeeAmount("");
    }
  };

  const validate = () => {
    let newErrors = {};

    // ✅ NAME VALIDATION
    if (!formData.name.trim()) {
      newErrors.name = "Student name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name must contain only letters";
    }

    // ✅ STUDENT ID VALIDATION (4 DIGITS ONLY)
    if (!formData.studentId.trim()) {
      newErrors.studentId = "Student ID is required";
    } else if (!/^\d{4}$/.test(formData.studentId)) {
      newErrors.studentId = "Student ID must be exactly 4 digits";
    }

    // ✅ ROOM TYPE
    if (!formData.roomType) {
      newErrors.roomType = "Please select a room type";
    }

    // ✅ PAYMENT METHOD
    if (!formData.paymentMethod) {
      newErrors.paymentMethod = "Please select payment method";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Payment submitted successfully!");
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #dbeafe, #c7d2fe)",
        fontFamily: "Arial",
        minHeight: "100vh",
      }}
    >
      <div className="container py-5">
        <div className="card shadow p-4">

          <h2 className="text-center text-primary mb-4">
            Pay Hostel Fees
          </h2>

          <form onSubmit={handleSubmit}>

            {/* NAME */}
            <div className="mb-3">
              <label className="fw-semibold">Student Name</label>
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
                <small className="text-danger">
                  {errors.studentId}
                </small>
              )}
            </div>

            {/* ROOM TYPE */}
            <div className="mb-3">
              <label className="fw-semibold">Room Type</label>
              <select
                name="roomType"
                className="form-select"
                value={formData.roomType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="60000">Single</option>
                <option value="45000">Double</option>
                <option value="35000">Triple</option>
              </select>
              {errors.roomType && (
                <small className="text-danger">
                  {errors.roomType}
                </small>
              )}
            </div>

            {/* FEE */}
            <div className="mb-3">
              <label className="fw-semibold">Fee Amount</label>
              <input
                type="text"
                className="form-control"
                value={feeAmount}
                readOnly
              />
            </div>

            {/* PAYMENT METHOD */}
            <div className="mb-3">
              <label className="fw-semibold">
                Payment Method
              </label>

              <select
                name="paymentMethod"
                className="form-select"
                value={formData.paymentMethod}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="UPI">UPI</option>
                <option value="Card">Card</option>
                <option value="NetBanking">Net Banking</option>
              </select>

              {errors.paymentMethod && (
                <small className="text-danger">
                  {errors.paymentMethod}
                </small>
              )}
            </div>

            {/* SUBMIT */}
            <button className="btn btn-primary w-100">
              Proceed to Pay
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}