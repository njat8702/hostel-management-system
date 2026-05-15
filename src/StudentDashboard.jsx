import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function StudentDashboard() {
  const dashboardCards = [
    {
      title: "Room Details",
      icon: "fa-bed",
      description:
        "View hostel room information and allocation details.",
      link: "/room_details",
    },
    {
      title: "Pay Fees",
      icon: "fa-credit-card",
      description:
        "Pay hostel fees securely through the online portal.",
      link: "/pay_fees",
    },
    {
      title: "Raise Complaint",
      icon: "fa-triangle-exclamation",
      description:
        "Report hostel maintenance and room related issues.",
      link: "/raise_complaints",
    },
    {
      title: "View Notices",
      icon: "fa-bullhorn",
      description:
        "Stay updated with hostel announcements and alerts.",
      link: "/view_notice",
    },
  ];

  const quickInfo = [
    {
      icon: "fa-bed",
      title: "Room No.",
      value: "A-204",
      textClass: "text-muted",
    },
    {
      icon: "fa-credit-card",
      title: "Fee Status",
      value: "Paid",
      textClass: "text-success",
    },
    {
      icon: "fa-triangle-exclamation",
      title: "Complaints",
      value: "2 Pending",
      textClass: "text-muted",
    },
    {
      icon: "fa-bullhorn",
      title: "New Notices",
      value: "3 Updates",
      textClass: "text-muted",
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
          <a
            className="navbar-brand fw-bold"
            href="#"
            style={{
              color: "#4f46e5",
              fontSize: "24px",
            }}
          >
            <i className="fa-solid fa-building me-2"></i>
            Student Portal
          </a>

          <div className="ms-auto">
            <button className="btn btn-outline-primary rounded-pill px-4">
              <i className="fa-solid fa-right-from-bracket me-2"></i>
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Welcome Section */}

      <div
        className="container text-center"
        style={{
          padding: "50px 20px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "45px",
            fontWeight: "bold",
            color: "#4f46e5",
          }}
        >
          Welcome Back, Student!
        </h1>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
          }}
        >
          Manage hostel activities easily through your dashboard.
        </p>
      </div>

      {/* Quick Info */}

      <div className="container mb-5">
        <div
          className="shadow-sm"
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "25px",
          }}
        >
          <div className="row g-4">
            {quickInfo.map((info, index) => (
              <div className="col-md-3" key={index}>
                <div
                  className="shadow-sm text-center"
                  style={{
                    background: "#f8fafc",
                    borderRadius: "15px",
                    padding: "20px",
                    transition: "0.3s",
                  }}
                >
                  <i
                    className={`fa-solid ${info.icon} fs-1 text-primary mb-3`}
                  ></i>

                  <h5 className="fw-bold">
                    {info.title}
                  </h5>

                  <p className={`${info.textClass} mb-0`}>
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard Cards */}

      <div className="container">
        <div className="row g-4">
          {dashboardCards.map((card, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <a
                href={card.link}
                className="text-decoration-none"
              >
                <div
                  className="card shadow-lg p-4 text-center h-100 border-0"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    background: "white",
                    transition: "0.3s",
                  }}
                >
                  <div
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50%",
                      background: "#eef2ff",
                      color: "#4f46e5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "38px",
                      margin: "auto",
                    }}
                  >
                    <i className={`fa-solid ${card.icon}`}></i>
                  </div>

                  <div className="card-body">
                    <h4
                      className="mt-3"
                      style={{
                        color: "#4f46e5",
                        fontWeight: "bold",
                      }}
                    >
                      {card.title}
                    </h4>

                    <p className="text-muted">
                      {card.description}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}

      <footer
        className="py-4 shadow-lg bg-white"
        style={{
          marginTop: "60px",
        }}
      >
        <div className="container text-center">
          <p className="text-muted mb-1">
            © 2026 Hostel Management System | All Rights Reserved
          </p>

          <p className="text-muted mb-0">
            Designed for efficient hostel administration and student services.
          </p>
        </div>
      </footer>
    </div>
  );
}