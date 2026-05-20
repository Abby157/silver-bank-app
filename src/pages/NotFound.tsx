import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        padding: "30px",

        textAlign: "center",
      }}
    >
      <div
        className="premium-card fade-up"
        style={{
          padding: "60px",

          borderRadius: "32px",

          background:
            "rgba(255,255,255,0.05)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          backdropFilter:
            "blur(20px)",

          maxWidth: "520px",

          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "120px",

            fontWeight: "bold",

            lineHeight: 1,

            marginBottom: "10px",
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: "34px",

            marginBottom: "16px",
          }}
        >
          Page Not Found
        </h2>

        <p
          style={{
            color: "#9ca3af",

            marginBottom: "35px",
          }}
        >
          The page you are looking for does not exist.
        </p>

        <Link to="/dashboard">
          <button
            className="premium-button"
            style={{
              border: "none",

              padding: "18px 30px",

              borderRadius: "20px",

              background:
                "linear-gradient(135deg,#7c3aed,#ff2fb9)",

              color: "white",

              fontWeight: "bold",

              fontSize: "16px",

              cursor: "pointer",
            }}
          >
            Return Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}