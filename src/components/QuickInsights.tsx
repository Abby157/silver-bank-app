import { motion } from "framer-motion";

const insights = [
  {
    title: "Monthly Growth",
    value: "+18.4%",
  },
  {
    title: "Top Spending",
    value: "Shopping",
  },
  {
    title: "Crypto Profit",
    value: "+$2,450",
  },
  {
    title: "Active Cards",
    value: "4 Cards",
  },
];

export default function QuickInsights() {
  return (
    <div
      style={{
        marginTop: "30px",
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
      }}
    >
      {insights.map(
        (insight, index) => (
          <motion.div
            key={insight.title}
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
              y: -6,
              scale: 1.02,
            }}
            style={{
              padding: "26px",
              borderRadius: "28px",
              background:
                "rgba(255,255,255,0.05)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              backdropFilter:
                "blur(16px)",
              boxShadow:
                "0 0 25px rgba(124,58,237,0.12)",
            }}
          >
            <p
              style={{
                color: "#9ca3af",
                marginBottom: "14px",
                fontSize: "15px",
              }}
            >
              {insight.title}
            </p>

            <h2
              style={{
                fontSize: "34px",
                fontWeight: "bold",
              }}
            >
              {insight.value}
            </h2>
          </motion.div>
        )
      )}
    </div>
  );
}