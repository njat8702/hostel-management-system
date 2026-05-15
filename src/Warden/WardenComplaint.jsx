import { useState } from "react";

export default function WardenComplaint() {
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      room: "A-101",
      category: "Electricity",
      message: "Fan is not working properly since yesterday",
      status: "Pending"
    },
    {
      id: 2,
      name: "Priya Verma",
      room: "B-203",
      category: "Water",
      message: "No water supply in morning hours",
      status: "Pending"
    },
    {
      id: 3,
      name: "Aman Gupta",
      room: "C-110",
      category: "Cleaning",
      message: "Room cleaning not done for 3 days",
      status: "Resolved"
    }
  ]);

  const markResolved = (id) => {
    const updated = complaints.map((item) =>
      item.id === id ? { ...item, status: "Resolved" } : item
    );
    setComplaints(updated);
  };

  const pendingCount = complaints.filter((c) => c.status === "Pending").length;
  const resolvedCount = complaints.filter((c) => c.status === "Resolved").length;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Warden Complaint Dashboard</h2>

      <div className="row text-center mb-4">
        <div className="col">
          <div className="card p-3 shadow-sm">
            <h5>Total Complaints</h5>
            <h3>{complaints.length}</h3>
          </div>
        </div>

        <div className="col">
          <div className="card p-3 shadow-sm">
            <h5>Pending</h5>
            <h3>{pendingCount}</h3>
          </div>
        </div>

        <div className="col">
          <div className="card p-3 shadow-sm">
            <h5>Resolved</h5>
            <h3>{resolvedCount}</h3>
          </div>
        </div>
      </div>

      {complaints.map((item) => (
        <div
          key={item.id}
          className={`card mb-3 p-3 shadow-sm border-start border-4 ${
            item.status === "Resolved" ? "border-success" : "border-warning"
          }`}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">
              {item.name} ({item.room})
            </h5>

            <span
              className={`badge ${
                item.status === "Resolved"
                  ? "bg-success"
                  : "bg-warning text-dark"
              }`}
            >
              {item.status}
            </span>
          </div>

          <p className="mt-2 mb-1">
            <strong>Category:</strong> {item.category}
          </p>

          <p className="mb-2">{item.message}</p>

          {item.status === "Pending" && (
            <button
              className="btn btn-success btn-sm"
              onClick={() => markResolved(item.id)}
            >
              Mark as Resolved
            </button>
          )}
        </div>
      ))}
    </div>
  );
}