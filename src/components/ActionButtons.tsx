import {
  Send,
  ArrowDownLeft,
  ArrowUpRight,
  Wallet,
} from "lucide-react";

import toast from "react-hot-toast";

const buttons = [
  {
    title: "Send",
    icon: <Send size={20} />,
    action: () =>
      toast.success(
        "Transfer initiated successfully"
      ),
  },

  {
    title: "Receive",
    icon: (
      <ArrowDownLeft size={20} />
    ),
    action: () =>
      toast.success(
        "Money received successfully"
      ),
  },

  {
    title: "Deposit",
    icon: (
      <ArrowUpRight size={20} />
    ),
    action: () =>
      toast.success(
        "Deposit completed"
      ),
  },

  {
    title: "Withdraw",
    icon: <Wallet size={20} />,
    action: () =>
      toast.success(
        "Withdrawal successful"
      ),
  },
];

export default function ActionButtons() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(180px,1fr))",
        gap: "20px",
      }}
    >
      {buttons.map((button) => (
        <button
          key={button.title}
          onClick={button.action}
          style={{
            border: "none",
            padding: "22px",
            borderRadius: "22px",
            background:
              "linear-gradient(135deg,#7c3aed,#ff2fb9)",
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            transition: "0.3s",
            boxShadow:
              "0 10px 40px rgba(255,47,185,0.25)",
          }}
        >
          {button.icon}
          {button.title}
        </button>
      ))}
    </div>
  );
}