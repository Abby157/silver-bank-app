import {
  useState,
} from "react";

const allTransactions = [
  {
    name: "Netflix",
    amount: "-$15",
    type: "Expense",
  },

  {
    name: "Salary",
    amount: "+$8200",
    type: "Income",
  },

  {
    name: "Amazon",
    amount: "-$240",
    type: "Expense",
  },

  {
    name: "Crypto",
    amount: "+$1200",
    type: "Investment",
  },

  {
    name: "Apple",
    amount: "-$999",
    type: "Expense",
  },
];

export default function AdvancedTransactions() {
  const [search, setSearch] =
    useState("");

  const filtered =
    allTransactions.filter((tx) =>
      tx.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div
      className="premium-card fade-up"
      style={{
        marginTop: "30px",

        padding: "30px",

        borderRadius: "30px",

        background:
          "rgba(255,255,255,0.05)",

        border:
          "1px solid rgba(255,255,255,0.08)",

        backdropFilter:
          "blur(20px)",
      }}
    >
      <div
        style={{
          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",

          marginBottom: "24px",

          gap: "20px",

          flexWrap: "wrap",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          Transactions Table
        </h2>

        <input
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          placeholder="Search..."

          style={{
            padding: "14px 18px",

            borderRadius: "16px",

            border:
              "1px solid rgba(255,255,255,0.08)",

            background:
              "rgba(255,255,255,0.05)",

            color: "white",

            outline: "none",
          }}
        />
      </div>

      <div
        style={{
          overflowX: "auto",
        }}
      >
        <table
          style={{
            width: "100%",

            borderCollapse:
              "collapse",
          }}
        >
          <thead>
            <tr>
              {[
                "Name",
                "Amount",
                "Type",
              ].map((head) => (
                <th
                  key={head}
                  style={{
                    textAlign:
                      "left",

                    padding:
                      "16px",

                    color:
                      "#9ca3af",

                    borderBottom:
                      "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filtered.map(
              (tx, index) => (
                <tr
                  key={index}
                >
                  <td
                    style={{
                      padding:
                        "18px 16px",
                    }}
                  >
                    {tx.name}
                  </td>

                  <td
                    style={{
                      padding:
                        "18px 16px",

                      fontWeight:
                        "bold",
                    }}
                  >
                    {tx.amount}
                  </td>

                  <td
                    style={{
                      padding:
                        "18px 16px",

                      color:
                        "#4ade80",
                    }}
                  >
                    {tx.type}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}