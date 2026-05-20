import { useState } from "react";

export default function TransferSystem() {
  const [recipient, setRecipient] =
    useState("");

  const [amount, setAmount] =
    useState("");

  function handleTransfer(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!recipient || !amount) {
      alert("Fill all fields");
      return;
    }

    alert(
      `Successfully transferred $${amount} to ${recipient}`
    );

    setRecipient("");
    setAmount("");
  }

  return (
    <div
      style={{
        background:
          "rgba(255,255,255,0.06)",
        border:
          "1px solid rgba(255,255,255,0.08)",
        borderRadius: "32px",
        padding: "32px",
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
        <div>
          <h2
            style={{
              fontSize: "34px",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            Quick Transfer
          </h2>

          <p
            style={{
              color: "#b6b6d9",
            }}
          >
            Send money instantly
          </p>
        </div>

        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg,#7c3aed,#ff2fb9)",
          }}
        />
      </div>

      <form onSubmit={handleTransfer}>
        <div
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Recipient Name"
            value={recipient}
            onChange={(e) =>
              setRecipient(
                e.target.value
              )
            }
            style={{
              padding: "20px",
              borderRadius: "18px",
              border: "none",
              outline: "none",
              background:
                "rgba(255,255,255,0.08)",
              color: "white",
              fontSize: "16px",
            }}
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) =>
              setAmount(
                e.target.value
              )
            }
            style={{
              padding: "20px",
              borderRadius: "18px",
              border: "none",
              outline: "none",
              background:
                "rgba(255,255,255,0.08)",
              color: "white",
              fontSize: "16px",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "20px",
              borderRadius: "18px",
              border: "none",
              background:
                "linear-gradient(90deg,#7c3aed,#ff2fb9)",
              color: "white",
              fontWeight: "bold",
              fontSize: "18px",
              cursor: "pointer",
              boxShadow:
                "0 0 30px rgba(124,58,237,0.35)",
            }}
          >
            Send Money
          </button>
        </div>
      </form>
    </div>
  );
}