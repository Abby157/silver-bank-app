export default function LiveTransactions() {
  const transactions = [
    {
      name: "Netflix",
      amount: "-$15",
      status: "Completed",
    },
    {
      name: "Apple Music",
      amount: "-$10",
      status: "Completed",
    },
    {
      name: "Salary",
      amount: "+$8,400",
      status: "Received",
    },
    {
      name: "Transfer",
      amount: "-$250",
      status: "Pending",
    },
  ];

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "24px",
        padding: "25px",
        marginTop: "25px",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Live Transactions
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {transactions.map((tx, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "rgba(255,255,255,0.04)",
              padding: "16px",
              borderRadius: "18px",
            }}
          >
            <div>
              <h3
                style={{
                  margin: 0,
                  fontSize: "18px",
                }}
              >
                {tx.name}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#9ca3af",
                  fontSize: "14px",
                }}
              >
                {tx.status}
              </p>
            </div>

            <h2
              style={{
                margin: 0,
                color:
                  tx.amount.includes("+")
                    ? "#4ade80"
                    : "#f472b6",
              }}
            >
              {tx.amount}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}