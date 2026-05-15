import React, { useState } from "react";

export default function Attendance() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      room: "A-101",
      status: "Present",
    },
    {
      id: 2,
      name: "Priya Verma",
      room: "B-204",
      status: "Absent",
    },
    {
      id: 3,
      name: "Rohan Singh",
      room: "C-303",
      status: "Present",
    },
  ]);

  const handleStatusChange = (id, value) => {
    const updatedStudents = students.map((student) =>
      student.id === id
        ? { ...student, status: value }
        : student
    );

    setStudents(updatedStudents);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #dbeafe, #c7d2fe)",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      <div className="container">

        {/* Heading */}

        <div className="text-center mb-5">
          <h1
            className="fw-bold"
            style={{
              color: "#4f46e5",
            }}
          >
            Attendance Management
          </h1>

          <p className="text-muted fs-5">
            Manage and update hostel student attendance.
          </p>
        </div>

        {/* Attendance Card */}

        <div
          className="card border-0 shadow-lg"
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
                    <th>Attendance</th>
                  </tr>
                </thead>

                <tbody>
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td>{student.id}</td>

                      <td>{student.name}</td>

                      <td>{student.room}</td>

                      <td>
                        <select
                          className="form-select"
                          value={student.status}
                          onChange={(e) =>
                            handleStatusChange(
                              student.id,
                              e.target.value
                            )
                          }
                        >
                          <option value="Present">
                            Present
                          </option>

                          <option value="Absent">
                            Absent
                          </option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

            {/* Save Button */}

            <div className="mt-4 text-end">
              <button
                className="btn shadow"
                style={{
                  background: "#4f46e5",
                  color: "white",
                  borderRadius: "12px",
                  padding: "10px 25px",
                  fontWeight: "bold",
                }}
              >
                Save Attendance
              </button>
            </div>

            {/* Back Button */}

            <div className="mt-3">
              <a
                href="/warden-dashboard"
                className="btn btn-outline-primary"
                style={{
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