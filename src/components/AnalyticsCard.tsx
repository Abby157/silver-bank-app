function AnalyticsCard() {
  const bars = [85, 60, 95, 40, 75, 55];

  return (
    <div
      className="card-hover"
      style={{
        background: "#0f1b4c",
        borderRadius: "24px",
        padding: "30px",
        minHeight: "260px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "white",
        }}
      >
        Analytics Overview
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          height: "180px",
          gap: "12px",
        }}
      >
        {bars.map((height, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              height: `${height}%`,
              borderRadius: "14px",
              background:
                "linear-gradient(180deg, #60a5fa 0%, #ec4899 100%)",
              boxShadow: "0 0 15px rgba(236,72,153,0.35)",
              transition: "0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default AnalyticsCard;