export default function AdminComplaints() {
  return (
    <div className="container py-5">
      <h2 className="text-primary">Complaints</h2>

      <div className="card p-3 mt-3">
        <h5>Water Issue</h5>
        <p>Room 101 - No water supply</p>
        <button className="btn btn-success btn-sm">Resolve</button>
      </div>

      <div className="card p-3 mt-3">
        <h5>Electricity Issue</h5>
        <p>Room 202 - Power cut problem</p>
        <button className="btn btn-success btn-sm">Resolve</button>
      </div>
    </div>
  );
}