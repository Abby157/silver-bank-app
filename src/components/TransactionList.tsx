import { motion } from "framer-motion";

export default function TransactionList() {
  const transactions = [
    {
      name: "Salary Payment",
      amount: "+$2,500",
      time: "Today",
    },
    {
      name: "Netflix Subscription",
      amount: "-$15",
      time: "Yesterday",
    },
    {
      name: "Apple Store",
      amount: "-$320",
      time: "2 days ago",
    },
    {
      name: "Crypto Deposit",
      amount: "+$1,200",
      time: "3 days ago",
    },
  ];

  return (
    <div
      style={{
        background:
          "rgba(255,255,255,0.06)",
        border:
          "1px solid rgba(255,255,255,0.08)",
        borderRadius: "32px",
        padding: "30px",
        backdropFilter: "blur(16px)",
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
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          Recent Transactions
        </h2>

        <button
          style={{
            padding: "12px 22px",
            borderRadius: "14px",
            background:
              "linear-gradient(90deg,#7c3aed,#ff2fb9)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          View All
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gap: "18px",
        }}
      >
        {transactions.map(
          (transaction, index) => (
            <motion.div
              key={transaction.name}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.02,
                y: -4,
              }}
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
                padding: "22px",
                borderRadius: "22px",
                background:
                  "rgba(255,255,255,0.04)",
                border:
                  "1px solid rgba(255,255,255,0.05)",
                cursor: "pointer",
              }}
            >
              <div>
                <h3
                  style={{
                    marginBottom: "6px",
                    fontSize: "18px",
                  }}
                >
                  {transaction.name}
                </h3>

                <p
                  style={{
                    color: "#b6b6d9",
                  }}
                >
                  {transaction.time}
                </p>
              </div>

              <h3
                style={{
                  color:
                    transaction.amount.includes(
                      "-"
                    )
                      ? "#ff5c8a"
                      : "#4ade80",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                {transaction.amount}
              </h3>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}