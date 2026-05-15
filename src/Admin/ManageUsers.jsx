export default function ManageUsers() {
  return (
    <div className="container py-5">
      <h2 className="text-primary">Manage Users</h2>

      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Room</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rahul</td>
            <td>Student</td>
            <td>101</td>
            <td>Active</td>
          </tr>

          <tr>
            <td>Amit</td>
            <td>Student</td>
            <td>102</td>
            <td>Active</td>
          </tr>

          <tr>
            <td>Mr. Sharma</td>
            <td>Warden</td>
            <td>-</td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}