type Props = {
  title: string;
  amount: number;
};

function StatsCard({ title, amount }: Props) {
  return (
    <div
      className="card-hover"
      style={{
        background:
          "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
        borderRadius: "24px",
        padding: "30px",
        textAlign: "center",
        color: "white",
      }}
    >
      <h2
        style={{
          marginBottom: "14px",
          fontSize: "28px",
        }}
      >
        {title}
      </h2>

      <h1
        style={{
          fontSize: "54px",
        }}
      >
        ${amount}
      </h1>
    </div>
  );
}

export default StatsCard;