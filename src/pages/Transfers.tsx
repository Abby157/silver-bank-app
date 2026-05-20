import Layout from "../components/Layout";
import { useState } from "react";

export default function Transfers() {
  const [recipient, setRecipient] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const transactions = [
    {
      name: "Transfer to Michael",
      amount: "-$400",
      time: "Today",
    },
    {
      name: "Transfer from Sarah",
      amount: "+$1,200",
      time: "Yesterday",
    },
    {
      name: "Apple Payment",
      amount: "-$120",
      time: "2 days ago",
    },
  ];

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
    <Layout>
      <h1
        style={{
          fontSize: "72px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Transfers
      </h1>

      <p
        style={{
          color: "#b6b6d9",
          marginBottom: "40px",
          fontSize: "18px",
        }}
      >
        Send and manage transactions
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "28px",
        }}
      >
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
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "28px",
            }}
          >
            Quick Transfer
          </h2>

          <form
            onSubmit={handleTransfer}
          >
            <div
              style={{
                display: "grid",
                gap: "18px",
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
                  padding: "18px",
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
                  padding: "18px",
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
                  padding: "18px",
                  borderRadius: "18px",
                  border: "none",
                  background:
                    "linear-gradient(90deg,#7c3aed,#ff2fb9)",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                Send Money
              </button>
            </div>
          </form>
        </div>

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
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "28px",
            }}
          >
            Recent Transfers
          </h2>

          <div
            style={{
              display: "grid",
              gap: "18px",
            }}
          >
            {transactions.map(
              (transaction) => (
                <div
                  key={transaction.name}
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    alignItems: "center",
                    padding: "20px",
                    borderRadius: "20px",
                    background:
                      "rgba(255,255,255,0.04)",
                  }}
                >
                  <div>
                    <h3>
                      {transaction.name}
                    </h3>

                    <p
                      style={{
                        color: "#b6b6d9",
                        marginTop: "6px",
                      }}
                    >
                      {transaction.time}
                    </p>
                  </div>

                  <h3
                    style={{
                      color:
                        transaction.amount.includes(
                          "-"
                        )
                          ? "#ff5c8a"
                          : "#4ade80",
                    }}
                  >
                    {transaction.amount}
                  </h3>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}