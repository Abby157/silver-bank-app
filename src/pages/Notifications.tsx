import Layout from "../components/Layout";

export default function Notifications() {
  const notifications = [
    {
      title:
        "Transfer completed successfully",
      time: "Just now",
    },
    {
      title:
        "Salary payment received",
      time: "10 mins ago",
    },
    {
      title:
        "Security login detected",
      time: "1 hour ago",
    },
    {
      title:
        "Netflix subscription renewed",
      time: "Yesterday",
    },
    {
      title:
        "Card protection enabled",
      time: "2 days ago",
    },
  ];

  return (
    <Layout>
      <h1
        style={{
          fontSize: "72px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Notifications
      </h1>

      <p
        style={{
          color: "#b6b6d9",
          marginBottom: "40px",
          fontSize: "18px",
        }}
      >
        Latest banking alerts
      </p>

      <div
        style={{
          display: "grid",
          gap: "22px",
        }}
      >
        {notifications.map(
          (notification) => (
            <div
              key={notification.title}
              style={{
                background:
                  "rgba(255,255,255,0.06)",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                borderRadius: "28px",
                padding: "28px",
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "24px",
                    marginBottom: "8px",
                  }}
                >
                  🔔{" "}
                  {notification.title}
                </h2>

                <p
                  style={{
                    color: "#b6b6d9",
                  }}
                >
                  {notification.time}
                </p>
              </div>

              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(90deg,#7c3aed,#ff2fb9)",
                }}
              />
            </div>
          )
        )}
      </div>
    </Layout>
  );
}