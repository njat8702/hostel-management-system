import React, { useState } from "react";

function MonitorStudents() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      room: "A-101",
      course: "BCA",
      status: "Present",
    },
    {
      id: 2,
      name: "Priya Verma",
      room: "B-204",
      course: "B.Tech",
      status: "Absent",
    },
  ]);

  return (
    <div
      style={{
        background: "linear-gradient(to right, #dbeafe, #c7d2fe)",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <div className="container">
        {/* Heading */}

        <div className="text-center mb-5">
          <h1
            style={{
              color: "#4f46e5",
              fontWeight: "bold",
            }}
          >
            Monitor Students
          </h1>

          <p className="text-muted">
            View and monitor hostel student details.
          </p>
        </div>

        {/* Card */}

        <div
          className="card shadow-lg border-0"
          style={{
            borderRadius: "20px",
          }}
        >
          <div className="card-body p-4">
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Student Name</th>
                    <th>Room No.</th>
                    <th>Course</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td>{student.id}</td>

                      <td>{student.name}</td>

                      <td>{student.room}</td>

                      <td>{student.course}</td>

                      <td>
                        <span
                          className={`badge ${
                            student.status === "Present"
                              ? "bg-success"
                              : "bg-danger"
                          }`}
                        >
                          {student.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Back Button */}

            <div className="mt-4">
              <a
                href="/warden-dashboard"
                className="btn shadow"
                style={{
                  background: "#4f46e5",
                  color: "white",
                  borderRadius: "12px",
                  padding: "10px 25px",
                  fontWeight: "bold",
                }}
              >
                Back to Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonitorStudents;