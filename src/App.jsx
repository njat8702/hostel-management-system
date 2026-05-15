
import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import Register from "./Register";
import StudentDashboard from "./StudentDashboard";
import PayFees from "./PayFees";
import RaiseComplaint from "./RaiseComplaint";
import RoomDetails from "./RoomDetails";
import ViewNotice from "./viewnotice";
import StudentLogin from "./Login";

import WardenLogin from "./Warden/WardenLogin";
import WardenRegister from "./Warden/WardenRegister";
import WardenDashboard from "./Warden/WardenDashboard";
import MonitorStudents from "./Warden/MonitorStudents";
import Attendance from "./Warden/Attendance";
import VisitorEntry from "./Warden/VisitorEntry";
import WardenComplaint from "./Warden/WardenComplaint";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import NavBar from "./NavBar";
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";
import ManageUsers from "./Admin/ManageUsers";
import ManageRooms from "./Admin/ManageRooms";
import AdminComplaints from "./Admin/AdminComplaints";
import AdminAttendance from "./Admin/AdminAttendance";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<StudentLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student_portal" element={<StudentDashboard />} />
        <Route path="/pay_fees" element={<PayFees />} />
        <Route path="/raise_complaints" element={<RaiseComplaint />} />
        <Route path="/room_details" element={<RoomDetails />} />
        <Route path="/view_notice" element={<ViewNotice />} />

        <Route path="/warden-login" element={<WardenLogin />} />
        <Route path="/warden-register" element={<WardenRegister />} />
        <Route path="/warden-dashboard" element={<WardenDashboard />} />
        <Route path="/monitor-students" element={<MonitorStudents />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/visitor-entry" element={<VisitorEntry />} />
        <Route path="/warden-complaints" element={<WardenComplaint />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/manage-rooms" element={<ManageRooms />} />
        <Route path="/admin-complaints" element={<AdminComplaints />} />
        <Route path="/admin-attendance" element={<AdminAttendance />} />
      </Routes>
    </>
  );
}

export default App;