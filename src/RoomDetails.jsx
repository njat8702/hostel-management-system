import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function HostelRoomDetails() {
  const rooms = [
    {
      title: "Single Room",
      price: "₹60,000/year",
      image: "/SingleRoom.jpg",
      description:
        "Private room ideal for students who prefer personal space and a peaceful study environment.",
      facilities: [
        { icon: "fa-bed", text: "Single Bed" },
        { icon: "fa-wifi", text: "High-Speed WiFi" },
        { icon: "fa-table", text: "Study Table" },
        { icon: "fa-lock", text: "Personal Locker" },
      ],
    },
    {
      title: "Double Sharing",
      price: "₹45,000/year",
      image: "/DoubleSharing.jpg",
      description:
        "Shared room for two students with balanced privacy, comfort, and affordability.",
      facilities: [
        { icon: "fa-bed", text: "Two Beds" },
        { icon: "fa-fan", text: "Ceiling Fan" },
        { icon: "fa-wifi", text: "WiFi Access" },
        { icon: "fa-lightbulb", text: "Study Lamps" },
      ],
    },
    {
      title: "Triple Sharing",
      price: "₹35,000/year",
      image: "/TripleSharing.jpg",
      description:
        "Budget-friendly accommodation suitable for students who enjoy a social hostel environment.",
      facilities: [
        { icon: "fa-bed", text: "Three Beds" },
        { icon: "fa-wifi", text: "WiFi Access" },
        { icon: "fa-bath", text: "Shared Washroom" },
        { icon: "fa-shield-halved", text: "24×7 Security" },
      ],
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(to right, #dbeafe, #c7d2fe)",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg shadow-sm bg-white">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#" style={{ color: "#4f46e5" }}>
            <i className="fa-solid fa-building me-2"></i>
            Hostel Management
          </a>

          <a href="/student_portal" className="btn btn-outline-primary rounded-pill px-4">
            <i className="fa-solid fa-arrow-left me-2"></i>
            Dashboard
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div className="container text-center py-5">
        <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "#4f46e5" }}>
          Hostel Room Types
        </h1>
        <p className="text-muted fs-5">
          Explore different hostel room options with facilities, accommodation details, and pricing.
        </p>
      </div>

      {/* Cards */}
      <div className="container pb-5">
        <div className="row g-4">
          {rooms.map((room, index) => (
            <div className="col-lg-4" key={index}>
              <div className="card shadow-lg border-0 h-100" style={{ borderRadius: "25px" }}>
                
                <img
                  src={room.image}
                  alt={room.title}
                  style={{
                    height: "250px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="fw-bold text-primary">{room.title}</h4>

                    <span
                      style={{
                        background: "#eef2ff",
                        color: "#4f46e5",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      {room.price}
                    </span>
                  </div>

                  <p className="text-muted">{room.description}</p>

                  <h6 className="fw-bold text-primary mt-3">Facilities</h6>

                  {room.facilities.map((f, i) => (
                    <div key={i} className="d-flex align-items-center mb-2">
                      <i className={`fa-solid ${f.icon} me-2 text-primary`}></i>
                      {f.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white text-center py-4 shadow-lg">
        <p className="mb-1 text-muted">© 2026 Hostel Management System</p>
        <p className="mb-0 text-muted">Designed for hostel administration system</p>
      </footer>
    </div>
  );
}