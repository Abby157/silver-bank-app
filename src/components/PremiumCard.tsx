import { motion } from "framer-motion";

export default function PremiumCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        rotate: 1,
        scale: 1.02,
      }}
      transition={{
        duration: 0.5,
      }}
      style={{
        height: "260px",
        borderRadius: "32px",
        padding: "32px",
        background:
          "linear-gradient(135deg,#111827,#7c3aed,#ff2fb9)",
        position: "relative",
        overflow: "hidden",
        boxShadow:
          "0 0 40px rgba(124,58,237,0.35)",
        marginTop: "30px",
      }}
    >
      {/* GLOW */}
      <div
        style={{
          position: "absolute",
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          background:
            "rgba(255,255,255,0.12)",
          top: "-80px",
          right: "-80px",
          filter: "blur(40px)",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              opacity: 0.8,
              marginBottom: "10px",
            }}
          >
            Silver Black
          </p>

          <h2
            style={{
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            PREMIUM
          </h2>
        </div>

        <div
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            background:
              "rgba(255,255,255,0.15)",
          }}
        />
      </div>

      <div
        style={{
          marginTop: "70px",
        }}
      >
        <h2
          style={{
            letterSpacing: "4px",
            fontSize: "30px",
            marginBottom: "30px",
          }}
        >
          4587 •••• •••• 9012
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
          }}
        >
          <div>
            <p
              style={{
                opacity: 0.7,
                marginBottom: "6px",
              }}
            >
              CARD HOLDER
            </p>

            <h3>DAVID ABRAHAM</h3>
          </div>

          <div>
            <p
              style={{
                opacity: 0.7,
                marginBottom: "6px",
              }}
            >
              EXPIRES
            </p>

            <h3>12/30</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}