export default function AnalyticsCard() {
  return (
    <div
      style={{
        background:
          "rgba(255,255,255,0.06)",
        border:
          "1px solid rgba(255,255,255,0.08)",
        borderRadius: "32px",
        padding: "30px",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            Balance Analytics
          </h2>

          <p
            style={{
              color: "#b6b6d9",
            }}
          >
            Weekly financial overview
          </p>
        </div>

        <div
          style={{
            padding: "12px 20px",
            borderRadius: "14px",
            background:
              "linear-gradient(90deg,#7c3aed,#ff2fb9)",
            fontWeight: "bold",
          }}
        >
          +18.4%
        </div>
      </div>

      <div
        style={{
          height: "300px",
          display: "flex",
          alignItems: "flex-end",
          gap: "16px",
        }}
      >
        {[
          120,
          180,
          140,
          220,
          190,
          260,
          300,
        ].map((height, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              height: `${height}px`,
              borderRadius:
                "20px 20px 0 0",
              background:
                "linear-gradient(180deg,#7c3aed,#ff2fb9)",
              boxShadow:
                "0 0 20px rgba(255,47,185,0.35)",
            }}
          />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          marginTop: "16px",
          color: "#b6b6d9",
        }}
      >
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  );
}