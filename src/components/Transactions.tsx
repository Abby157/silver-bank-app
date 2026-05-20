const transactions = [
  {
    name: "Netflix",
    amount: "-$15",
    status: "Subscription",
  },

  {
    name: "Salary",
    amount: "+$4,500",
    status: "Income",
  },

  {
    name: "Apple Store",
    amount: "-$120",
    status: "Shopping",
  },

  {
    name: "PayPal",
    amount: "+$850",
    status: "Transfer",
  },
];

export default function Transactions() {
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

        backdropFilter: "blur(20px)",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "25px",
        }}
      >
        Recent Transactions
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {transactions.map((item) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              justifyContent:
                "space-between",

              alignItems: "center",

              padding: "20px",

              borderRadius: "20px",

              background:
                "rgba(255,255,255,0.04)",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  marginBottom: "6px",
                }}
              >
                {item.name}
              </h3>

              <p
                style={{
                  color: "#9ca3af",
                }}
              >
                {item.status}
              </p>
            </div>

            <h2
              style={{
                color:
                  item.amount.includes("+")
                    ? "#4ade80"
                    : "#f87171",
              }}
            >
              {item.amount}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}