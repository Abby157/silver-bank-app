import { motion } from "framer-motion";

interface Props {
  title: string;
  amount: number;
}

export default function StatsCard({
  title,
  amount,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
      }}
      style={{
        background:
          "rgba(255,255,255,0.06)",
        border:
          "1px solid rgba(255,255,255,0.08)",
        borderRadius: "28px",
        padding: "28px",
        backdropFilter: "blur(16px)",
        position: "relative",
        overflow: "hidden",
        boxShadow:
          "0 0 30px rgba(124,58,237,0.15)",
      }}
    >
      {/* GLOW */}
      <div
        style={{
          position: "absolute",
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          background:
            "rgba(255,47,185,0.15)",
          top: "-40px",
          right: "-40px",
          filter: "blur(40px)",
        }}
      />

      <p
        style={{
          color: "#b6b6d9",
          marginBottom: "16px",
          fontSize: "16px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {title}
      </p>

      <h2
        style={{
          fontSize: "46px",
          fontWeight: "bold",
          marginBottom: "18px",
          position: "relative",
          zIndex: 2,
        }}
      >
        ${amount.toLocaleString()}
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <span
          style={{
            color: "#4ade80",
            fontWeight: "bold",
          }}
        >
          +12.5%
        </span>

        <div
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "16px",
            background:
              "linear-gradient(135deg,#7c3aed,#ff2fb9)",
            boxShadow:
              "0 0 20px rgba(255,47,185,0.4)",
          }}
        />
      </div>
    </motion.div>
  );
}