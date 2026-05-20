import { motion } from "framer-motion";

const activities = [
  {
    title: "Salary Received",
    time: "2 mins ago",
  },
  {
    title: "Transfer Completed",
    time: "18 mins ago",
  },
  {
    title: "Card Payment",
    time: "1 hour ago",
  },
  {
    title: "Crypto Purchase",
    time: "3 hours ago",
  },
];

export default function ActivityTimeline() {
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
        backdropFilter: "blur(16px)",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "28px",
        }}
      >
        Activity Timeline
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {activities.map(
          (activity, index) => (
            <motion.div
              key={activity.title}
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.12,
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
              }}
            >
              {/* DOT */}
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg,#7c3aed,#ff2fb9)",
                  boxShadow:
                    "0 0 18px rgba(255,47,185,0.45)",
                }}
              />

              <div
                style={{
                  flex: 1,
                  padding: "18px 22px",
                  borderRadius: "22px",
                  background:
                    "rgba(255,255,255,0.04)",
                }}
              >
                <h3
                  style={{
                    marginBottom: "6px",
                    fontSize: "18px",
                  }}
                >
                  {activity.title}
                </h3>

                <p
                  style={{
                    color: "#9ca3af",
                    fontSize: "14px",
                  }}
                >
                  {activity.time}
                </p>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}