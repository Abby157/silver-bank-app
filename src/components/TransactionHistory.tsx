import { motion } from "framer-motion";

const transactions = [
  {
    name: "Netflix Subscription",
    amount: "-$15.99",
    status: "Completed",
    color: "#ff4d6d",
  },

  {
    name: "Salary Payment",
    amount: "+$8,200",
    status: "Received",
    color: "#4ade80",
  },

  {
    name: "Apple Store",
    amount: "-$1,240",
    status: "Completed",
    color: "#ff4d6d",
  },

  {
    name: "Crypto Deposit",
    amount: "+$3,400",
    status: "Pending",
    color: "#facc15",
  },

  {
    name: "Amazon Purchase",
    amount: "-$320",
    status: "Completed",
    color: "#ff4d6d",
  },
];

export default function TransactionHistory() {
  return (
    <motion.div
      className="premium-card"
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      style={{
        marginTop: "30px",

        padding: "30px",

        borderRadius: "30px",

        background: "rgba(255,255,255,0.05)",

        border: "1px solid rgba(255,255,255,0.08)",

        backdropFilter: "blur(20px)",
      }}
    >
      <h2
        style={{
          marginBottom: "25px",

          fontSize: "28px",
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
        {transactions.map((tx, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.02,
            }}
            className="premium-card"
            style={{
              display: "flex",

              justifyContent: "space-between",

              alignItems: "center",

              padding: "18px 22px",

              borderRadius: "20px",

              background:
                "rgba(255,255,255,0.04)",

              border:
                "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "16px",
                }}
              >
                {tx.name}
              </h3>

              <p
                style={{
                  color: "#9ca3af",

                  fontSize: "13px",

                  marginTop: "5px",
                }}
              >
                {tx.status}
              </p>
            </div>

            <h2
              style={{
                color: tx.color,

                fontSize: "22px",
              }}
            >
              {tx.amount}
            </h2>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}