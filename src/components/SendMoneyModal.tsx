import { motion } from "framer-motion";

import toast from "react-hot-toast";

interface Props {
  open: boolean;

  onClose: () => void;
}

export default function SendMoneyModal({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  const handleSend = () => {
    toast.success(
      "Transfer completed successfully"
    );

    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",

        inset: 0,

        background:
          "rgba(0,0,0,0.55)",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        zIndex: 2000,

        padding: "20px",
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
        }}
        className="premium-card"
        style={{
          width: "100%",
          maxWidth: "500px",

          padding: "35px",

          borderRadius: "30px",

          background:
            "rgba(15,23,42,0.95)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          backdropFilter:
            "blur(20px)",
        }}
      >
        <h2
          style={{
            fontSize: "34px",

            marginBottom: "10px",
          }}
        >
          Send Money
        </h2>

        <p
          style={{
            color: "#9ca3af",

            marginBottom: "30px",
          }}
        >
          Secure bank transfer
        </p>

        {/* RECIPIENT */}
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <p
            style={{
              marginBottom: "10px",
            }}
          >
            Recipient
          </p>

          <input
            placeholder="Enter recipient"
            style={{
              width: "100%",

              padding: "18px",

              borderRadius: "18px",

              border:
                "1px solid rgba(255,255,255,0.08)",

              background:
                "rgba(255,255,255,0.05)",

              color: "white",

              outline: "none",
            }}
          />
        </div>

        {/* AMOUNT */}
        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <p
            style={{
              marginBottom: "10px",
            }}
          >
            Amount
          </p>

          <input
            placeholder="$0.00"
            style={{
              width: "100%",

              padding: "18px",

              borderRadius: "18px",

              border:
                "1px solid rgba(255,255,255,0.08)",

              background:
                "rgba(255,255,255,0.05)",

              color: "white",

              outline: "none",
            }}
          />
        </div>

        {/* ACTIONS */}
        <div
          style={{
            display: "flex",

            gap: "16px",
          }}
        >
          <button
            onClick={onClose}
            className="premium-button"
            style={{
              flex: 1,

              border: "none",

              padding: "18px",

              borderRadius: "18px",

              background:
                "rgba(255,255,255,0.08)",

              color: "white",

              cursor: "pointer",
            }}
          >
            Cancel
          </button>

          <button
            onClick={handleSend}
            className="premium-button"
            style={{
              flex: 1,

              border: "none",

              padding: "18px",

              borderRadius: "18px",

              background:
                "linear-gradient(135deg,#7c3aed,#ff2fb9)",

              color: "white",

              fontWeight: "bold",

              cursor: "pointer",
            }}
          >
            Send
          </button>
        </div>
      </motion.div>
    </div>
  );
}