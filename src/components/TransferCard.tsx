import { useState } from "react";

type Props = {
  onSend: (recipient: string, amount: number) => void;
};

function TransferCard({ onSend }: Props) {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handleSend = () => {
    onSend(recipient, Number(amount));

    setRecipient("");
    setAmount("");
  };

  return (
    <div
      style={{
        background: "#0f1b4c",
        borderRadius: "24px",
        padding: "30px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        Transfer Money
      </h2>

      <input
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Recipient Account"
        style={inputStyle}
      />

      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        type="number"
        style={inputStyle}
      />

      <button
        onClick={handleSend}
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "16px",
          border: "none",
          borderRadius: "14px",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          background:
            "linear-gradient(90deg, #93c5fd 0%, #ec4899 100%)",
        }}
      >
        Send Money
      </button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "16px",
  marginBottom: "16px",
  borderRadius: "12px",
  border: "none",
  background: "#091233",
  color: "white",
};

export default TransferCard;