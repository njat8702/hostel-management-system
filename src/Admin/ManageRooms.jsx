export default function ManageRooms() {
  return (
    <div className="container py-5">
      <h2 className="text-primary">Room Management</h2>

      <div className="row mt-4">

        <div className="col-md-3">
          <div className="card p-3 text-center bg-success text-white">
            Room 101 - Occupied
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 text-center bg-success text-white">
            Room 102 - Occupied
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 text-center bg-warning">
            Room 103 - Available
          </div>
        </div>

      </div>
    </div>
  );
}