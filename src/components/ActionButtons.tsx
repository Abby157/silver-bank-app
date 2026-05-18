function ActionButtons() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "30px",
      }}
    >
      <button
        style={{
          padding: "15px 25px",
          borderRadius: "14px",
          border: "none",
          background: "#2563eb",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Deposit
      </button>

      <button
        style={{
          padding: "15px 25px",
          borderRadius: "14px",
          border: "none",
          background: "#dc2626",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Withdraw
      </button>

      <button
        style={{
          padding: "15px 25px",
          borderRadius: "14px",
          border: "none",
          background: "#9333ea",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Transfer
      </button>
    </div>
  );
}

export default ActionButtons;