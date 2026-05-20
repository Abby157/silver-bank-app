import { motion } from "framer-motion";

const notifications = [
  {
    title: "Salary received",
    time: "2 mins ago",
  },

  {
    title: "Transfer completed",
    time: "18 mins ago",
  },

  {
    title: "New login detected",
    time: "1 hour ago",
  },

  {
    title: "Crypto price alert",
    time: "3 hours ago",
  },
];

interface Props {
  open: boolean;
}

export default function NotificationsPanel({
  open,
}: Props) {
  if (!open) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="premium-card"
      style={{
        position: "absolute",

        top: "80px",

        right: 0,

        width: "340px",

        padding: "24px",

        borderRadius: "24px",

        background:
          "rgba(15,23,42,0.96)",

        border:
          "1px solid rgba(255,255,255,0.08)",

        backdropFilter:
          "blur(20px)",

        zIndex: 3000,
      }}
    >
      <h2
        style={{
          fontSize: "24px",

          marginBottom: "20px",
        }}
      >
        Notifications
      </h2>

      <div
        style={{
          display: "flex",

          flexDirection: "column",

          gap: "16px",
        }}
      >
        {notifications.map(
          (item, index) => (
            <div
              key={index}
              style={{
                padding: "16px",

                borderRadius: "18px",

                background:
                  "rgba(255,255,255,0.05)",
              }}
            >
              <h4
                style={{
                  marginBottom: "6px",
                }}
              >
                {item.title}
              </h4>

              <p
                style={{
                  color: "#9ca3af",

                  fontSize: "13px",
                }}
              >
                {item.time}
              </p>
            </div>
          )
        )}
      </div>
    </motion.div>
  );
}