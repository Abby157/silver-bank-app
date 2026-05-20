export default function StatsCard({
  title,
  amount,
}: {
  title: string;
  amount: string;
}) {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "16px",
        background: "#1e1e1e",
      }}
    >
      <h3>{title}</h3>
      <h1>{amount}</h1>
    </div>
  );
}