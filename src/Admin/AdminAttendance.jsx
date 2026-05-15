export default function AdminAttendance() {
  return (
    <div className="container py-5">
      <h2 className="text-primary">Attendance Report</h2>

      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Room</th>
            <th>Attendance</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rahul</td>
            <td>101</td>
            <td>95%</td>
          </tr>

          <tr>
            <td>Amit</td>
            <td>102</td>
            <td>88%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}