const goals = [
  {
    title: "Emergency Fund",
    progress: "72%",
    width: "72%",
  },

  {
    title: "Travel Savings",
    progress: "45%",
    width: "45%",
  },

  {
    title: "Investment Target",
    progress: "89%",
    width: "89%",
  },
];

export default function FinancialGoals() {
  return (
    <div
      className="premium-card fade-up"
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
          marginBottom: "30px",
        }}
      >
        Financial Goals
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
        }}
      >
        {goals.map((goal) => (
          <div key={goal.title}>
            <div
              style={{
                display: "flex",

                justifyContent:
                  "space-between",

                marginBottom: "12px",
              }}
            >
              <h3>{goal.title}</h3>

              <p
                style={{
                  color: "#9ca3af",
                }}
              >
                {goal.progress}
              </p>
            </div>

            {/* BAR */}
            <div
              style={{
                width: "100%",

                height: "16px",

                borderRadius: "999px",

                background:
                  "rgba(255,255,255,0.08)",

                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: goal.width,

                  height: "100%",

                  borderRadius:
                    "999px",

                  background:
                    "linear-gradient(135deg,#7c3aed,#ff2fb9)",

                  boxShadow:
                    "0 8px 20px rgba(255,47,185,0.3)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}