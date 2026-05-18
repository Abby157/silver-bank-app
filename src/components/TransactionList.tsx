type Transaction = {
  title: string;
  date: string;
  amount: number;
};

type Props = {
  transactions: Transaction[];
};

function TransactionList({ transactions }: Props) {
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
        Recent Transactions
      </h2>

      {transactions.map((transaction, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 0",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div>
            <h3
              style={{
                margin: 0,
                fontSize: "20px",
              }}
            >
              {transaction.title}
            </h3>

            <p
              style={{
                margin: "5px 0 0",
                color: "#cbd5e1",
              }}
            >
              {transaction.date}
            </p>
          </div>

          <h2
            style={{
              color:
                transaction.amount > 0 ? "#4ade80" : "#f87171",
            }}
          >
            {transaction.amount > 0 ? "+" : ""}
            ${transaction.amount}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;