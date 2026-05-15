import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function ViewNotices() {
  const notices = [
    {
      icon: "fa-credit-card",
      title: "Hostel Fee Submission Deadline",
      date: "8 May 2026",
      description:
        "Students are requested to submit semester hostel fees before 20 May 2026 to avoid late payment penalties.",
    },
    {
      icon: "fa-wifi",
      title: "Internet Maintenance Notice",
      date: "6 May 2026",
      description:
        "Hostel WiFi services may remain unavailable from 2 PM to 5 PM due to scheduled maintenance work.",
    },
    {
      icon: "fa-broom",
      title: "Room Inspection & Cleaning Drive",
      date: "4 May 2026",
      description:
        "Room inspections and cleanliness checks will be conducted block-wise this weekend.",
    },
    {
      icon: "fa-user-check",
      title: "Visitor Timing Update",
      date: "2 May 2026",
      description:
        "Visitor entry timings have been updated from 4 PM to 7 PM for all hostel blocks.",
    },
  ];

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(to right, #dbeafe, #c7d2fe)",
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}

      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 sticky-top">
        <div className="container">
          {/* Logo */}

          <a
            className="navbar-brand fw-bold text-primary"
            href="/studentportal"
          >
            <i className="fa-solid fa-building me-2"></i>
            Hostel Management
          </a>

          {/* Dashboard Button */}

          <a
            href="/student_portal"
            className="btn btn-outline-primary rounded-pill px-4 fw-semibold"
          >
            <i className="fa-solid fa-arrow-left me-2"></i>
            Dashboard
          </a>
        </div>
      </nav>

      {/* Main Content */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            width: "95%",
            maxWidth: "1150px",
            background: "white",
            borderRadius: "25px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          }}
        >
          <div className="row g-0">
            {/* Left Section */}

            <div
              className="col-md-4 d-flex flex-column justify-content-center"
              style={{
                background: "#4f46e5",
                color: "white",
                padding: "60px 50px",
              }}
            >
              <h1
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                Notice Board
              </h1>

              <p className="lead">
                Stay updated with hostel announcements,
                maintenance alerts, fee deadlines, and
                important notices.
              </p>

              <div
                style={{
                  marginTop: "25px",
                  fontSize: "18px",
                  background: "rgba(255,255,255,0.15)",
                  padding: "15px",
                  borderRadius: "12px",
                }}
              >
                <i className="fa-solid fa-bullhorn me-2"></i>
                Important Announcements
              </div>

              <div
                style={{
                  marginTop: "25px",
                  fontSize: "18px",
                  background: "rgba(255,255,255,0.15)",
                  padding: "15px",
                  borderRadius: "12px",
                }}
              >
                <i className="fa-solid fa-calendar-days me-2"></i>
                Event & Deadline Updates
              </div>

              <div
                style={{
                  marginTop: "25px",
                  fontSize: "18px",
                  background: "rgba(255,255,255,0.15)",
                  padding: "15px",
                  borderRadius: "12px",
                }}
              >
                <i className="fa-solid fa-circle-info me-2"></i>
                Hostel Information Alerts
              </div>
            </div>

            {/* Right Section */}

            <div
              className="col-md-8"
              style={{
                padding: "60px 50px",
                background: "#f8fafc",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  color: "#4f46e5",
                }}
              >
                Latest Notices
              </h2>

              <p className="text-muted mb-4">
                View all hostel related announcements and updates.
              </p>

              {/* Notices */}

              {notices.map((notice, index) => (
                <div
                  key={index}
                  className="shadow-sm"
                  style={{
                    background: "white",
                    borderRadius: "18px",
                    padding: "25px",
                    marginBottom: "20px",
                    transition: "0.3s",
                    borderLeft: "6px solid #4f46e5",
                  }}
                >
                  <div className="d-flex">
                    <div
                      className="me-4"
                      style={{
                        width: "55px",
                        height: "55px",
                        background: "#eef2ff",
                        color: "#4f46e5",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "22px",
                      }}
                    >
                      <i className={`fa-solid ${notice.icon}`}></i>
                    </div>

                    <div>
                      <h5 className="fw-bold">
                        {notice.title}
                      </h5>

                      <p
                        style={{
                          color: "gray",
                          fontSize: "14px",
                        }}
                      >
                        {notice.date}
                      </p>

                      <p className="mb-0 text-muted">
                        {notice.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}