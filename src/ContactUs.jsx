import React from "react";

export default function ContactUs() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f8fafc" }}>
      
      {/* HERO */}
      <div
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(to right, #4f46e5, #6366f1)",
        }}
      >
        <h1 className="fw-bold">Contact Us</h1>
        <p className="mt-2">
          We are always here to help you
        </p>
      </div>

      {/* CONTENT */}
      <div className="container py-5">

        <div className="row g-4 text-center">

          <div className="col-md-4">
            <div className="card shadow border-0 p-4 h-100">
              <h5 className="fw-bold text-primary">Address</h5>
              <p className="text-muted">
                Hostel Campus, India
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0 p-4 h-100">
              <h5 className="fw-bold text-primary">Phone</h5>
              <p className="text-muted">
                +91 9876543210
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0 p-4 h-100">
              <h5 className="fw-bold text-primary">Email</h5>
              <p className="text-muted">
                hostelmanagement@gmail.com
              </p>
            </div>
          </div>

        </div>

        {/* FORM */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card shadow p-4 border-0">
              <h3 className="text-center text-primary mb-4">
                Send Message
              </h3>

              <form>
                <input
                  className="form-control mb-3"
                  placeholder="Your Name"
                />

                <input
                  className="form-control mb-3"
                  placeholder="Your Email"
                />

                <textarea
                  className="form-control mb-3"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>

                <button className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}