const activities = [
  {
    title: "Salary received",
    time: "2 mins ago",
  },

  {
    title: "Transfer completed",
    time: "18 mins ago",
  },

  {
    title: "Netflix payment",
    time: "1 hour ago",
  },

  {
    title: "Crypto purchase",
    time: "3 hours ago",
  },
];

export default function ActivityPanel() {
  return (
    <div
      style={{
        marginTop: "30px",

        padding: "30px",

        borderRadius: "30px",

        background:
          "rgba(255,255,255,0.05)",

        border:
          "1px solid rgba(255,255,255,0.08)",

        backdropFilter:
          "blur(20px)",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "24px",
        }}
      >
        Recent Activity
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {activities.map((item) => (
          <div
            key={item.title}
            style={{
              padding: "20px",

              borderRadius: "22px",

              background:
                "rgba(255,255,255,0.04)",
            }}
          >
            <h3
              style={{
                marginBottom: "8px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#9ca3af",
              }}
            >
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}